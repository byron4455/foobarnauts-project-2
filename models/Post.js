module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      poster_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      content: {
          type: DataTypes.TEXT
      }
  },{
      timestamp: true,
      hooks: {}
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
    }),
    Post.hasMany(models.Comment, {
        foreignKey: 'in_post',
        onDelete: 'cascade'
    }),
    Post.belongsToMany(models.Topic, {
        through: 'Post_Topics'
    })
  };

  return Post;
}