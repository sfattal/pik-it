module.exports = function(sequelize, DataTypes) {
    var Poll = sequelize.define(
      "Poll", 
      {
        // poll_id: {
        //   type: DataTypes.INTEGER,
        //   autoIncrement: true,
        //   primaryKey: true
        // },
        poll_name: {
          type: DataTypes.STRING
        }
      });
    return Poll;
  };
  