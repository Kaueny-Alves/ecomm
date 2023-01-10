import { Sequelize } from 'sequelize';

export const client = new Sequelize('mysql://root@product-database:3307/products');