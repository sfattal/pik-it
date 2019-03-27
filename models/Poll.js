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
        },
        poll_key: {
          type: DataTypes.STRING
        },
        poll_description: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        poll_expiration: {
          type: DataTypes.DATE,
          allowNull: true
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      });

      Poll.associate = function(models) {
        Poll.hasMany(models.Choice, {
        foreignKey: {
            name: "poll_id",
            allowNull: false
        }
    });
    };
    
    return Poll;
  };


  