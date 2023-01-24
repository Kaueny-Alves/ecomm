
import request from "supertest";
import { app } from '../../src/app.js'


describe("Account Creation ", () => {

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
})

