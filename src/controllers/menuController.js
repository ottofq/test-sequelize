import Menu from "../models/Menu";
import sequelize from "sequelize";

class MenuController {
  async create(req, res) {
    const { starter_course, protein, accompany, garnish, dessert } = req.body;

    const menu = await Menu.create({
      starter_course,
      protein,
      accompany,
      garnish,
      dessert,
    });

    return res.json(menu);
  }
  async list(req, res) {
    const menus = await Menu.findAll();

    return res.json(menus);
  }
  async listRating(req, res) {
    const { menu_id } = req.params;

    const menus = await Menu.findOne({
      where: { id: menu_id },
      include: [{ association: "ratings" }],
    });

    return res.json(menus);
  }
}

export default new MenuController();
