import { Sequelize } from 'sequelize';

export const client = new Sequelize('mysql://root@product-database/products');