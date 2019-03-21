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
            submitter_id: {
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
            Response.belongsTo(models.Choice, {
                foreignKey: {
                    name: "user_id",
                    allowNull: false
                }
            });
          };
    return Response;
  };