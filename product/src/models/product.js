
import { Model, DataTypes } from 'sequelize';
import { client } from '../repositories/clientDatabase.js';
import { ProductFeature } from './product_feature.js';
import { ProductImage } from './product_image.js';

export class Product extends Model {
  static associate(models) {}
}
Product.init({
  name: DataTypes.STRING,
  value: DataTypes.DECIMAL,
  quantity: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  category: DataTypes.STRING,
  id_user: DataTypes.UUID
}, {
  sequelize: client,
  modelName: 'Product',
});

Product.ProductImage = Product.hasMany(ProductImage, {
  foreignKey: 'product_id',
  as: 'images'
});

Product.ProductFeature = Product.hasMany(ProductFeature, {
  foreignKey: 'product_id',
  as: 'features'
});

ProductFeature.belongsTo(Product, {
  foreignKey: 'id',
});


ProductImage.belongsTo(Product, {
  foreignKey: 'id',
});