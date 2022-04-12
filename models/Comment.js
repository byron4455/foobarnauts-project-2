const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        posted_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        in_topic:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{
        timestamps: true,
        hooks: {}
    });

    Comment.associate = (models) => {
      Comment.hasOne(models.User,{
          foreignKey: 'posted_by'
      });
      Comment.hasOne(models.Topic,{
          foreignKey: 'in_topic',
      });
    };

    return Comment;
}