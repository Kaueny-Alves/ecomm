import { app } from "../../src/app";
import request from 'supertest';
import { produto } from "../data/products.js";
import { saveProduct } from "../../src/repositories/productRepository";

describe('Product List', () => {

    it('should return a empty list ', async () => {
        await request(app)
            .get('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200)
            .expect(({ body }) => {
                expect(body).toEqual([]);
            });
    });

    it('should return a list a product ', async () => {
        await saveProduct(produto);

        await request(app)
            .get('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200)
            .expect(({ body }) => {
                expect(body).toEqual(expect.arrayContaining([{
                    ...produto,
                    value: String(produto.value),
                    id_user: expect.any(String),
                    id: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    features: expect.arrayContaining(produto.features.map(feature => ({
                        ...feature,
                        id: expect.any(Number),
                        product_id: body[0].id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    }))),
                    images: expect.arrayContaining(produto.images.map(image => ({
                        ...image,
                        id: expect.any(Number),
                        product_id: body[0].id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })))

                }]));
            });
    });
});
