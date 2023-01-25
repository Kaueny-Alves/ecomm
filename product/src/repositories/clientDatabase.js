import { Sequelize } from 'sequelize';

const clientURL = process.env.MYSQL_URL_DATABASE

export const client = new Sequelize(clientURL);