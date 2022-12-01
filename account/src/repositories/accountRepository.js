import { MongoClient } from 'mongodb';

async function dataBaseConnect() {
    const connectionURL = 'mongodb://admin:admin@account-database:27017'
    const connection = new MongoClient(connectionURL);
    await connection.connect();
    const database = connection.db('accounts')

    return database.collection('users');
}

export async function saveAccount(account) {
    const collection = await dataBaseConnect();
    await collection.insertOne(account);
}

export async function findAccountByEmail(email) {
    const collection = await dataBaseConnect();
    const account = await collection.findOne({ email });

    return account;
}

export async function existsAccountByEmail(email) {
    const account = await findAccountByEmail(email);

    return account !== null;
}