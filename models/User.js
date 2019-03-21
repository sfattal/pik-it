module.exports = function(sequelize, DataTypes) {
    const Submitter = sequelize.define(
        "Submitter", 
        {
            submitter_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            submitter_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            submitter_email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            submitter_key: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });
    return Submitter;
  };