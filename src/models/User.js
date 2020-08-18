import { Model, DataTypes } from "sequelize";

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Rating, { foreignKey: "user_id", as: "ratings" });
  }
}

export default User;
