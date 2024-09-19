const { Types } = require("mysql2");
const zlib = require("zlib");
const Sequelize = require("sequelize");
const { timeStamp } = require("console");
const { type } = require("os");
const { DataTypes, Op } = Sequelize;
const db = new Sequelize("sequelize", "root", "ahmednodemysql", {
  host: "localhost",
  dialect: "mysql",
});

const Product = db.define(
  "product",
  {
    productName: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const Customer = db.define(
  "customer",
  {
    customerName: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const CustomerProduct = db.define(
  "customerProduct",
  {
    customerProduct_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  { timestamps: false }
);

Customer.belongsToMany(Product, { through: CustomerProduct });
Product.belongsToMany(Customer, { through: CustomerProduct });

let customer, product;

/* db.sync({ alter: true })
  .then((data) => {
    return Customer.findOne({ where: { customerName: "ahmed" } });
  })
  .then((data) => {
    customer = data;
    return Product.findAll();
  })
  .then((product) => {
    return customer.addProducts(product);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

db.sync({ alter: true })
  .then((data) => {
    return Customer.destroy({ where: { customerName: "ahmed" } });
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
