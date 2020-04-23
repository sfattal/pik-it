module.exports = function(sequelize, DataTypes) {
    var Poll = sequelize.define(
      "Poll", 
      {
        poll_name: {
          type: DataTypes.STRING
        },
        poll_key: {
          type: DataTypes.STRING
        },
        admin_key: {
          type: DataTypes.STRING,
          allowNull: true
        },
        poll_description: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        poll_expiration: {
          type: DataTypes.DATE,
          allowNull: true
        },
        poll_resulted: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false
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
        
        Poll.hasMany(models.Response, {
            foreignKey: {
                name: "poll_id",
                allowNull: false
            }
        });

        Poll.hasMany(models.User, {
            foreignKey: {
                name: "poll_id",
                allowNull: false
            }
        });

    };
    
    return Poll;

  };


  