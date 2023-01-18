import { app } from "../../src/app";
import request from 'supertest';
import { produto } from "../data/products.js";

describe('Product List', () => {

    it('should return a list a product ', async () => {
        await request(app)
            .get('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200)
            .expect(({ body }) => {
                expect(body[0]).toEqual({
                    ...produto,
                    id_user: expect.any(String),
                    id: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    features: produto.features.map(feature => ({
                        ...feature,
                        id: expect.any(Number),
                        product_id: body[0].id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })),
                    images: produto.images.map(image => ({
                        ...image,
                        id: expect.any(Number),
                        product_id: body[0].id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    }))

                });
            });
    });
});
