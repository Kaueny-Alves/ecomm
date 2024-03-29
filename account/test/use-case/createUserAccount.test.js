
import request from "supertest";
import { app } from '../../src/app.js'
import { getUsersCollection } from "../../src/repositories/accountRepository.js";
import { createUserUseCase } from "../../src/use-case/createUserAccount.js";

describe("Account Creation ", () => {
    afterEach(async () => {
        const usersCollection = await getUsersCollection();
        await usersCollection.deleteMany({});
    });

    it('should create an user given correct user data', async () => {
        await request(app)
            .post('/accounts/register')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'kaueny',
                email: 'kaueny@pagonxt.com',
                password: '123pago@23'
            })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    id: expect.any(String),
                    name: 'kaueny',
                    email: 'kaueny@pagonxt.com',
                    createdDate: new Date().toISOString().slice(0, 10)
                })
            });
    });

    it('Account already exists', async () => {
        await createUserUseCase('Kaueny', 'kaueny@pagonxt.com', '123pago@23');
        await request(app)
            .post('/accounts/register')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'kaueny',
                email: 'kaueny@pagonxt.com',
                password: '123pago@23'
            })
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual({
                   message: "Account already exists"
                })
            });
    });

})

