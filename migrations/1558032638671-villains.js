'use strict'

const Bluebird = require('bluebird');
const mongodb = require('mongodb');
const mongoose = require("mongoose");
const { MONGODB_URI, SESSION_SECRET } = require("../dist/util/secrets");
const { Villain } = require("../dist/models/Villain");
const { Attributes } = require("../dist/models/Attributes");
const { StaticData } = require("../dist/staticData");

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/myapp';

Bluebird.promisifyAll(MongoClient);

const createAttributes = (attrs, next) => {
  Attributes.create(attrs, (err, attributes) => {
    if (err) { return next("error creating attributes for villains: " + err); }
    return next(attributes._id);
  });
};
const update = (villain, next) => {
  villain.save((err) => {
    if (err) { return next("error updating villain with attributes id: " + err); }
    return next();
  });
};
const create = (data, next) => {
  Villain.create(data, (err, villain) => {
    if (err) { return next("error creating villain: " + err); }

    createAttributes(data.attrs, (attributesId) => {
      villain.attributesId = attributesId;
      update(villain, next);
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
  const mongoUrl = MONGODB_URI;
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