import { Sequelize } from 'sequelize';

export const client = new Sequelize('mysql://root@localhost:3306/products');