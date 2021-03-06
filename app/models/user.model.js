module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.BOOLEAN,
    },
    gender: {
      type: Sequelize.ENUM("L", "P"),
    },
    address: {
      type: Sequelize.TEXT,
    },
  });

  return User;
};
