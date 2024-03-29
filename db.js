const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("books", "root", "", {
    host: "localhost",
    dialect: "mariadb"
});
    (async () => {
        try {
            await sequelize.authenticate();
            console.log("Connection has been established successfully.");
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    })();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.books = require("./models/book.model.js")(sequelize, Sequelize)

module.exports = db;