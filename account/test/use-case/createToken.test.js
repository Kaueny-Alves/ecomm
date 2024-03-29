import request from "supertest";
import { app } from '../../src/app.js'
import { getUsersCollection } from "../../src/repositories/accountRepository.js";
import { client } from "../../src/repositories/clientDatabase.js";
import { createUserUseCase } from "../../src/use-case/createUserAccount.js";


describe("Create a Token", () => {

    afterEach(async () => {

        const usersCollection = await getUsersCollection();
        await usersCollection.deleteMany({});
    });

    it('create a token', async () => {
        await createUserUseCase('Kaueny', 'kaueny@pagonxt.com', '123pago@23');
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
    it('erro ao criar o token com o email errado', async () => {
        await createUserUseCase('Kaueny', 'kaueny@pagonxt.com', '123pago@23');
        await request(app)
            .post('/accounts/login')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                email: 'kaueny@pago.com',
                password: '123pago@23'
            })
            .expect(400)
            .expect(({ body }) => {
                expect(body).toEqual({
                    auth: false,
                    message: "email ou senha incorretos!",
                })
            });
    });
    it('erro ao criar o token com password errado', async () => {
        await createUserUseCase('Kaueny', 'kaueny@pagonxt.com', '123pago@23');
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
                    message: "email ou senha incorretos!",
                })
            });
    });
})

