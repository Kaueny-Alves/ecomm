import { client } from "./clientDatabase.js";


export async function getUsersCollection(client) {
    await client.connect();
    const db = client.db('accounts');
    const usersCollection = db.collection('users');
    return usersCollection;
}

export async function saveAccount(account) {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.insertOne(account);
}

export async function findAccountByEmail(email) {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    const account = await usersCollection.findOne({ email });

    return account;

}

export async function existsByEmail(email) {
    const possibleUser = await findAccountByEmail(email);
    return !!possibleUser;
}
