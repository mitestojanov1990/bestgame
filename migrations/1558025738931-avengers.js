'use strict'

const Bluebird = require('bluebird');
const mongodb = require('mongodb');
const mongoose = require("mongoose");
const { MONGODB_URI, SESSION_SECRET } = require("../dist/util/secrets");
const { Avenger } = require("../dist/models/Avenger");
const { Attributes } = require("../dist/models/Attributes");
const { StaticData } = require("../dist/staticData");

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/myapp';

Bluebird.promisifyAll(MongoClient);

const createAttributes = (attrs, next) => {
  Attributes.create(attrs, (err, attributes) => {
    if (err) { return next("error creating attributes for avenger: " + err); }
    return next(attributes._id);
  });
};
const update = (avenger, next) => {
  avenger.save((err) => {
    if (err) { return next("error updating avenger with attributes id: " + err); }
    return next();
  });
};
const create = (data, next) => {
  Avenger.create(data, (err, avenger) => {
    if (err) { return next("error creating avenger: " + err); }

    createAttributes(data.attrs, (attributesId) => {
      avenger.attributesId = attributesId;
      update(avenger, next);
    });
  });
};

module.exports.up = next => {
  // Connect to MongoDB
  const mongoUrl = MONGODB_URI;
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
  const mongoUrl = MONGODB_URI;
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