
import { Model, DataTypes} from 'sequelize';
import { client } from '../repositories/clientDatabase.js';

export class Product extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Product.init({
  name: DataTypes.STRING,
  value: DataTypes.DECIMAL,
  quantity: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  category: DataTypes.STRING,
  id_usuario: DataTypes.UUID
}, {
  sequelize: client,
  modelName: 'Product',
});

