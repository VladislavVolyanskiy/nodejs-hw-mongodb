import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
      //`mongodb+srv://vladyslav102:<db_password>@cluster0.mgk9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
      //mongodb+srv://vladislavvolyanskiy:LT3lSEAKYS9p2GhU@cluster0.oxkm7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Error while setting up mongo connection', error);
    throw error;
  }
};
