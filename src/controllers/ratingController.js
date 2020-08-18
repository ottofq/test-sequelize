import Rating from "../models/Rating";
import sequelize from "sequelize";

class RatingController {
  async create(req, res) {
    const {
      starter_course,
      protein,
      accompany,
      garnish,
      dessert,
      comment,
      user_id,
      menu_id,
    } = req.body;

    const rating = await Rating.create({
      starter_course,
      protein,
      accompany,
      garnish,
      dessert,
      comment,
      user_id,
      menu_id,
    });

    return res.json(rating);
  }
  async list(req, res) {
    const { menu_id } = req.params;
    const ratings = await Rating.findAll();

    return res.json(ratings);
  }

  async avg(req, res) {
    const { menu_id } = req.params;

    const menu = await Rating.findOne({
      where: { menu_id },
      attributes: [
        "menu_id",
        [
          sequelize.fn("avg", sequelize.col("avg_starter_course")),
          "starter_course",
        ],
        [sequelize.fn("avg", sequelize.col("protein")), "avg_protein"],
        [sequelize.fn("avg", sequelize.col("accompany")), "avg_accompany"],
        [sequelize.fn("avg", sequelize.col("garnish")), "avg_garnish"],
        [sequelize.fn("avg", sequelize.col("dessert")), "avg_dessert"],
      ],
    });

    return res.json(menu);
  }

  async listComments(req, res) {
    const { menu_id } = req.params;
    const ratings = await Rating.findAll({
      where: { menu_id },
      attributes: ["comment", "menu_id", "user_id"],
    });

    return res.json(ratings);
  }
}

export default new RatingController();
