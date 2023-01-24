import { app } from "../../src/app";
import request from 'supertest';
import { produto } from "../data/products.js";
import { cleanProductTable } from "../../src/helpers/products";

describe('Product Creation', () => {
    afterEach(async () => {

        await cleanProductTable()

    })

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTRkOWU1LWQ5ODgtNDBlZC05MGIyLWMzYjYzM2MzOGM1YiIsImlhdCI6MTY3NDQ5NDIwNn0.Vjix-yQq9BK3mVWls0A3udLBRW7toDxrGmU2sIyk44g"
    const tokenError = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    const tokenIdEmpty = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQ0OTQyMDZ9.Xk7vQeFPCzbC5wJTkFjOyV0uQNhQFEtTqb2et1NH9Pw"

    it('should create a product given required product data', async () => {

        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
            .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            .set('Access-Control-Allow-Credentials', true)
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
            .set('Authorization', `${tokenError}`)
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
