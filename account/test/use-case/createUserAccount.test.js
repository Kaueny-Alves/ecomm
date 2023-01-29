
import request from "supertest";
import { app } from '../../src/app.js'


describe("Account Creation ", () => {

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

})

