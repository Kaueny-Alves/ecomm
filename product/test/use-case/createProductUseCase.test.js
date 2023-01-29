import { app } from "../../src/app";
import request from 'supertest';
import { produto } from "../data/products.js";
import { cleanProductTable } from "../../src/helpers/products";
import { generateToken } from "../../src/helpers/authenticator";

describe('Product Creation', () => {
    afterEach(async () => {

        await cleanProductTable()

    })

    const id_user = "c794d9e5-d988-40ed-90b2-c3b633c38c5b"
    const token = generateToken(id_user) 
    const tokenIdEmpty = generateToken()

    it('should create a product given required product data', async () => {

        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Authorization', `${token}`)
            .send(produto)
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    ...produto,
                    id_user: body.id_user,
                    id: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    features: produto.features.map(feature => ({
                        ...feature,
                        id: expect.any(Number),
                        product_id: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })),
                    images: produto.images.map(image => ({
                        ...image,
                        id: expect.any(Number),
                        product_id: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    }))
                });
            });
    });

    it('erro ao criar produto sem o token', async () => {

        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Authorization', '')
            .send(produto)
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({});
            });
    });

    it('erro ao criar produto com o token errado', async () => {

        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Authorization', `${token + " a"}`)
            .send(produto)
            .expect(403)
            .expect(({ body }) => {
                expect(body).toEqual({});
            });
    });

    it('erro ao criar produto sem o id no token', async () => {

        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Authorization', `${tokenIdEmpty}`)
            .send(produto)
            .expect(403)
            .expect(({ body }) => {
                expect(body).toEqual({});
            });
    });

});
