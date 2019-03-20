module.exports = function(sequelize, DataTypes) {
    var Polls = sequelize.define("All\Polls", {
      poll_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      poll_name: {
        type: Sequelize.STRING
      }
    });
    return Polls;
  };
  