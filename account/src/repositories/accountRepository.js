import { client } from "./clientDatabase.js";


export async function getUsersCollection(client) {
    const db = client.db('accounts');
    const usersCollection = db.collection('users');
    return usersCollection;
}

export async function saveAccount(account) {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.insertOne(account);
    await client.close()
}

// export async function findAccountByEmail(email) {
//     try {
//         const collection = await getUsersCollection();
//         const account = await collection.findOne({ email });
//         return account;
//     } catch (e) {
//         console.error("error fetching email:=======", e.message.stack)
//     }
// }
