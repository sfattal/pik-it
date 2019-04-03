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
            // user_key: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },
            temp_account: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        });
    return User;
  };