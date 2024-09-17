const Sequelize = require("sequelize");
const db = new Sequelize("sequelize", "root", "ahmednodemysql", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
