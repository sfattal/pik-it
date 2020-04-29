module.exports = function(sequelize, DataTypes) {
    const Choice = sequelize.define(
        "Choice", 
        {
            poll_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            choiceType: {
                type: DataTypes.STRING,
                allowNull: false
            },
            choiceValue: {
                type: DataTypes.STRING,
                allowNull: false
            },
            choiceLabel: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });

        Choice.associate = function(models) {
            Choice.belongsTo(models.Poll, {
                foreignKey: {
                    name: "poll_id",
                    allowNull: false
                }
            });
        };
    
    return Choice;
};