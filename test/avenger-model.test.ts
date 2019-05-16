import mongoose from 'mongoose';
import { MONGODB_URI } from "./../src/util/secrets";
import bluebird = require('bluebird');
import { Avenger } from '../src/models/Avenger';
import { IAvenger } from '../src/interfaces/Avenger';

describe('Avenger model', () => {
  beforeAll(async () => {
    //await mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).then();
    const mongoUrl = MONGODB_URI;
    (<any>mongoose).Promise = bluebird;
    await mongoose.connect(mongoUrl, { useNewUrlParser: true });
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  it('Should throw validation errors', () => {
    const avenger = new Avenger();

    expect(avenger.validate).toThrow();
  });

  it('Should save an avenger', async () => {
    expect.assertions(3);

    const avenger: IAvenger = new Avenger({
      name: 'Super Hero',
      image: 'just text'
    });
    const spy = jest.spyOn(avenger, 'save');
    avenger.save();

    expect(spy).toHaveBeenCalled();

    expect(avenger).toMatchObject({
      name: expect.any(String),
      image: expect.any(String)
    });

    expect(avenger.name).toBe('Super Hero');
  });
});