const { Order, Product, User, profile } = require("../models/index");
const bcrypt = require("bcryptjs");
const formatDate = require("../helpers");
const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "aldin91alive@gmail.com",
//     pass: "asdasd123",
//   },
// });

class Controller {
  static home(req, res) {
    Product.findAll({
      order: [["price", "ASC"]],
      exclude: ["createdAt", "updatedAt", "description", "category"],
    })
      .then((product) => {
        res.render("home", { product });
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
