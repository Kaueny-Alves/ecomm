import { MongoClient } from 'mongodb';

const connectionURL = 'mongodb://admin:admin@account-database:27017'
const connection = new MongoClient(connectionURL);

async function getUsersCollection() {
    await connection.connect();
    const database = connection.db('accounts')
    return database.collection('users');
}

export async function saveAccount(account) {
    try {
        const collection = await getUsersCollection();
        await collection.insertOne(account);
    } catch (e) {
        console.error("unsaved account =======", e.message.stack);
    } finally {
        await connectionClosed()
    }
}

export async function findAccountByEmail(email) {
    try {
        const collection = await getUsersCollection();
        const account = await collection.findOne({ email });
        return account;
    } catch (e) {
        console.error("error fetching email:=======", e.message.stack)  
    }
}

async function connectionClosed() {
    connection.close();
    console.log("connection closed =======")
}