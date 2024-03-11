module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define(
      "book",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING,
        },
        isbn: {
          type: Sequelize.STRING,
        },
        year: {
          type: Sequelize.INTEGER,
        },
        genre: {
            type: Sequelize.STRING,
        },
        author: {
            type: Sequelize.STRING,
        },
        stock: {
            type: Sequelize.INTEGER,
        },
        publisher: {
            type: Sequelize.STRING,
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        timestamps: false,
        freezeTableName: true, //ya que nuestro modelo se llama "user", y por default le agrega "s", asi que lo plurarisa, para eso se utiliza freeze
        tableName: "book",
      }
    );
  
    return Book;
  };