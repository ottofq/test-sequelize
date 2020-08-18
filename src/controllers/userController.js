import User from "../models/User";

class UserController {
  async create(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  }
  async list(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }
  async listRating(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "ratings" },
    });

    return res.json(user);
  }
}

export default new UserController();
