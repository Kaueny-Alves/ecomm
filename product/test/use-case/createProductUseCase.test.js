import { app } from "../../src/app";
import request from 'supertest';
import { produto } from "../data/products.js";

describe('Product Creation', () => {

    it('should create a product given required product data', async () => {

        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
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
});
