import { MongoClient } from 'mongodb';

const clientURL = process.env.MONGO_URL_DATABASE
export const client = new MongoClient(clientURL);