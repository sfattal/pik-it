module.exports = function(sequelize, DataTypes) {
    const Response = sequelize.define(
        "Response", 
        {
            response_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            poll_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            choice_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            rank: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        });
    return Choice;
  };