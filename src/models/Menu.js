import { Model, DataTypes } from "sequelize";

class Menu extends Model {
  static init(connection) {
    super.init(
      {
        starter_course: DataTypes.STRING,
        protein: DataTypes.STRING,
        accompany: DataTypes.STRING,
        garnish: DataTypes.STRING,
        dessert: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Rating, { foreignKey: "menu_id", as: "ratings" });
  }
}

export default Menu;
