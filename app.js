const { Types } = require("mysql2");
const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const db = new Sequelize("sequelize", "root", "ahmednodemysql", {
  host: "localhost",
  dialect: "mysql",
});

const Student = db.define("student", {
  Student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [4, 20] },
    get() {
      const rawValue = this.getDataValue("name");
      return rawValue.toUpperCase();
    },
  },
  favorite_class: {
    type: DataTypes.STRING(25),
    defaultValue: "Computer Science",
  },
  school_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subscribed_to_wittcode: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

db.sync({ alter: true })
  .then((data) => {
    /*     return Student.bulkCreate([
      { name: "Jack Sparrow", school_year: 5 },
      { name: "Davy Jones", school_year: 6 },
    ]);
 */
    /*     return Student.findAll({
      attributes: ["name"],
      where: {
        [Op.or]: {
          favorite_class: "Computer Science",
          subscribed_to_wittcode: true,
        },
      },
    });
     */

    /* return Student.findAll({
      attributes: [
        "school_year",

        [db.fn("COUNT", db.col("school_year")), "num_students"],
      ],
      group: "school_year",
      raw: true,
    }); */

    return Student.findAndCountAll({
      where: { subscribed_to_wittcode: true },
      raw: true,
    });
  })
  .then(({ count, rows }) => {
    console.log(count);
    /* 
    data.forEach((element) => {
      console.log(element.toJSON());
    }); */
  })
  .catch((err) => {
    console.log(err);
  });
