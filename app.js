const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const db = new Sequelize("sequelize", "root", "ahmednodemysql", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",

  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

const User = db.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 9],
      },
      //unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 21,
    },
    wittCodeRocks: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

db.sync({ alter: true })
  .then((data) => {
    return User.bulkCreate(
      [
        {
          username: "b",
          password: "abc",
          age: 24,
          wittCodeRocks: false,
        },
        {
          username: "vvv vvvv vvvvv",
          password: "abc",
          age: 22,
          wittCodeRocks: false,
        },
      ],
      { validate: true }
    );
  })
  .then((data) => {
    data.forEach((element) => {
      console.log(element.toJSON());
    });
    console.log("user updated");
  })
  .catch((err) => {
    console.log(err);
  });
