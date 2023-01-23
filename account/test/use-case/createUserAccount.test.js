
import request from "supertest";
import { app } from '../../src/app.js'
import { getUsersCollection } from '../../src/repositories/accountRepository.js';
import { client } from "../../src/repositories/clientDatabase.js";
import { createUserUseCase } from "../../src/use-case/createUserAccount.js";

describe("Account Creation ", () => {

    // afterEach(async () => {

    //     const usersCollection = await getUsersCollection();
    //     await usersCollection.deleteMany({});

    // });


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


    it('create a token', async () => {
        await request(app)
            .post('/accounts/login')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                email: 'kaueny@pagonxt.com',
                password: '123pago@23'
            })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    auth: true,
                    token: expect.any(String),
                })
            });
    });

    it('error creating token with wrong password', async () => {
        await request(app)
            .post('/accounts/login')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                email: 'kaueny@pagonxt.com',
                password: '123pago@'
            })
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual({
                    auth: false,
                    message: "email ou senha incorretos!"
                })
            });
    });

    it('error creating token with wrong email', async () => {
        await request(app)
            .post('/accounts/login')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                email: 'kaueny@pagonxt.com',
                password: '123pago@'
            })
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual({
                    auth: false,
                    message: "email ou senha incorretos!"
                })
            });
    });

})

