module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        poster_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        in_post:{
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
      Comment.belongsTo(models.User,{
          
      });
      Comment.belongsTo(models.Post,{
          onDelete: 'cascade'
      });
    };

    return Comment;
}