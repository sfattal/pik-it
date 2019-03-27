module.exports = function(sequelize, DataTypes) {
    const Response = sequelize.define(
        "Response", 
        {
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
        
        Response.associate = function(models) {
            Response.belongsTo(models.Poll, {
              foreignKey: {
                name: "poll_id",
                allowNull: false
              }
            });
            Response.belongsTo(models.Choice, {
                foreignKey: {
                    name: "choice_id",
                    allowNull: false
                }
            });
            // Response.belongsTo(models.User, {
            //     foreignKey: {
            //         name: "user_id",
            //         allowNull: false
            //     }
            // });
          };
    return Response;
  };