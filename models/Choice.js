module.exports = function(sequelize, DataTypes) {
    const Choice = sequelize.define(
        "Choice", 
        {
            choice_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            poll_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            choice_text: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });
    return Choice;
  };