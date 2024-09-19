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

const Country = db.define(
  "country",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    countryName: { type: DataTypes.STRING },
  },
  {
    timestamp: false,
  }
);

const Capital = db.define(
  "capital",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    capitalName: { type: DataTypes.STRING },
  },
  {
    timestamp: false,
  }
);

Country.hasOne(Capital);
Capital.belongsTo(Country);

db.sync({ alter: true })
  .then((data) => {
    return Country.create({
      id: 17,
      countryName: "USA",
    });
  })
  .then((country) => {
    return country.createCapital({
      id: 37,
      capitalName: "W,DC",
    });
  })
  .then((data) => {
    console.log(data.toJSON());
  })
  .catch((err) => {
    console.log(err);
  });

User.hasMany(Post);
Post.belongsTo(User);

let user, posts;

db.sync({ alter: true })
  .then(() => {
    return User.findOne({ where: { username: "WittCode" } });
  })
  .then((data) => {
    user = data;
    return Post.findOne();
  })
  .then((data) => {
    posts = data;
    return user.removePost(posts);
    //return user.addPost(posts);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
