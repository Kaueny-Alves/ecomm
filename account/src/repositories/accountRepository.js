import { MongoClient } from 'mongodb';

const connectionURL = 'mongodb://admin:admin@account-database:27017'
const connection = new MongoClient(connectionURL);

async function dataBaseConnect() {
    await connection.connect();
    const database = connection.db('accounts')
    return database.collection('users');
}

export async function saveAccount(account) {
    try {
        const collection = await dataBaseConnect();
        await collection.insertOne(account);
    } catch (e) {
        console.log("unsaved account =======")
    } finally {
        await connectionClosed()
    }

}

export async function findAccountByEmail(email) {
    try {
        const collection = await dataBaseConnect();
        const account = await collection.findOne({ email });
        return account;
    } catch (e) {
        console.log("error fetching email:=======")  
    }
}


async function connectionClosed() {
    connection.close;
    console.log("connection closed =======")
}