const Sequelize = require("sequelize");
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
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
    age: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 21,
    },
    num: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 21,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
/* 
db.sync({ alter: true })
  .then((data) => {
    console.log("done");
  })
  .catch((err) => {
    console.log(err);
  });
 */
//db.drop({ match: /_test$/ });

console.log(db.models.user);