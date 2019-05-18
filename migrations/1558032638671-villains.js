'use strict'

const Bluebird = require('bluebird');
const mongodb = require('mongodb');
const mongoose = require("mongoose");
const { SERVER_CONFIG } = require("../dist/app/util/constants");
const { Villain } = require("../dist/app/modules/villains/schemas/villains.schema");
const { Attributes } = require("../dist/app/modules/attributes/schemas/attributes.schema");
const { StaticData } = require("../dist/staticData");

const MongoClient = mongodb.MongoClient;

Bluebird.promisifyAll(MongoClient);

const create = (data, next) => {
  const villain = new Villain({
    _id: new mongoose.Types.ObjectId(),
    name: data.name,
    image: data.image
  });

  villain.save((err) => {
    if (err) { return next("error creating villain: " + err); }
    const attributes = new Attributes({
      health: data.attrs.health,
      attack: data.attrs.attack,
      defense: data.attrs.defense,
      villainId: villain._id
    });
    attributes.save((err) => {
      if (err) { return next("error creating attributes for villain: " + err); }
    });
  });
};

module.exports.up = next => {
  // Connect to MongoDB
  const mongoUrl = SERVER_CONFIG.db;
  console.log(mongoUrl);
  mongoose.Promise = Bluebird;
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {

      let counter = 0;
      StaticData.Villains.forEach((villainData) => {
        create(villainData, (err) => {
          if(err) { return next(err); }
          counter++;
          if (counter === StaticData.Villains.length)
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
    if (err) { return next("Error removing attributes for villain " + err); }
    return next();
  });
};

const remove = (villain, next) => {
  Villain.findByIdAndRemove(villain._id, (err, removed) => {
    if (err) { return next("Error finding villain for remove " + err); }
    removeAttributes(removed.attributesId, next);
  });
};
const getVillains = (next) => {
  Villain.find({}, (err, villains) => {
    if (err) { return next("Error finding villains " + err); }
    return next(villains);
  });
};

module.exports.down = next => {
  // Connect to MongoDB
  const mongoUrl = SERVER_CONFIG.db;
  console.log(mongoUrl);
  mongoose.Promise = Bluebird;
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
      getVillains((villains) => {
        let counter = villains.length;
        villains.forEach((villain) => {
          remove(villain, (err) => {
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