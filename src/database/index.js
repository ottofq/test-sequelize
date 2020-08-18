import Sequelize from "sequelize";
import dbConfig from "../config/database";
import User from "../models/User";
import Menu from "../models/Menu";
import Rating from "../models/Rating";

const connection = new Sequelize(dbConfig);
User.init(connection);
Menu.init(connection);
Rating.init(connection);

Rating.associate(connection.models);
Menu.associate(connection.models);
User.associate(connection.models);

export default connection;
