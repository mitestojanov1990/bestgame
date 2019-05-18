'use strict'

const Bluebird = require('bluebird');
const mongodb = require('mongodb');
const mongoose = require("mongoose");
const { SERVER_CONFIG } = require("../dist/app/util/constants");
const { Avenger } = require("../dist/app/modules/avengers/schemas/avengers.schema");
const { Attributes } = require("../dist/app/modules/attributes/schemas/attributes.schema");
const { StaticData } = require("../dist/staticData");

const MongoClient = mongodb.MongoClient;

Bluebird.promisifyAll(MongoClient);

const create = (data, next) => {
  const avenger = new Avenger({
    _id: new mongoose.Types.ObjectId(),
    name: data.name,
    image: data.image
  });

  avenger.save((err) => {
    if (err) { return next("error creating avenger: " + err); }
    const attributes = new Attributes({
      health: data.attrs.health,
      attack: data.attrs.attack,
      defense: data.attrs.defense,
      avengerId: avenger._id
    });
    attributes.save((err) => {
      if (err) { return next("error creating attributes for avenger: " + err); }
    });
  });
};

module.exports.up = next => {
  // Connect to MongoDB
  const mongoUrl = SERVER_CONFIG.db;
  mongoose.Promise = Bluebird;
  
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {

      let counter = 0;
      StaticData.Avengers.forEach((avengerData) => {
        create(avengerData, (err) => {
          if(err) { return next(err); }
          counter++;
          if (counter === StaticData.Avengers.length)
            return next();
        });
      });
    }).catch(err => {
      console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
      // process.exit();
    });

}

const removeAttributes = (attrId, next) => {
  Attributes.findByIdAndRemove(attrId, (err, attributes) => {
    if (err) { return next("Error removing attributes for avenger " + err); }
    return next();
  });
};

const remove = (avenger, next) => {
  Avenger.findByIdAndRemove(avenger._id, (err, removedAvenger) => {
    if (err) { return next("Error finding avenger for remove " + err); }
    removeAttributes(removedAvenger.attributesId, next);
  });
};
const getAvengers = (next) => {
  Avenger.find({}, (err, avengers) => {
    if (err) { return next("Error finding avengers " + err); }
    return next(avengers);
  });
};

module.exports.down = next => {
  // Connect to MongoDB
  const mongoUrl = SERVER_CONFIG.db;
  mongoose.Promise = Bluebird;
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
      getAvengers((avengers) => {
        let counter = avengers.length;
        avengers.forEach((avenger) => {
          remove(avenger, (err) => {
            if(err) { return next(err); }
            counter--;
            if (counter === 0)
              return next();
          });
        });
      });
    }).catch(err => {
      console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
      // process.exit();
    });
}