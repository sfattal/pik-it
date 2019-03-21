module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define(
        "User", 
        {
            user_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_key: {
                type: DataTypes.STRING,
                allowNull: false
            },
            temp_account: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        });
    return User;
  };