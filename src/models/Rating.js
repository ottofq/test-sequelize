import { Model, DataTypes } from "sequelize";

class Rating extends Model {
  static init(connection) {
    super.init(
      {
        starter_course: DataTypes.INTEGER,
        protein: DataTypes.INTEGER,
        accompany: DataTypes.INTEGER,
        garnish: DataTypes.INTEGER,
        dessert: DataTypes.INTEGER,
        comment: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Menu, { foreignKey: "menu_id", as: "menu" });
  }
}

export default Rating;
