import { client } from "./clientDatabase.js";


export async function getUsersCollection() {
    await client.connect();
    const db = client.db('accounts');
    const usersCollection = db.collection('users');
    return usersCollection;
}

export async function saveAccount(account) {
    
    const usersCollection = await getUsersCollection();
    await usersCollection.insertOne(account);
}

export async function findAccountByEmail(email) {
   
    const usersCollection = await getUsersCollection();
    const account = await usersCollection.findOne({ email });

    return account;

}
