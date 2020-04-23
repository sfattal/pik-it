module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define(
        "User", 
        {
            user_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_email: {
                type: DataTypes.STRING,
                allowNull: true
            },
            poll_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            // user_key: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },
            temp_account: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        });

        User.associate = function(models) {
            User.belongsTo(models.Poll, {
              foreignKey: {
                name: "poll_id",
                allowNull: false
              }
            });

            User.hasMany(models.Response, {
                foreignKey: {
                    name: "user_id",
                    allowNull: false
                }
            });
        }

    return User;
  };