module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
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

  Topic.associate = (models) => {
    Topic.belongsTo(models.User, {
    }),
    Topic.hasMany(models.Comment, {
        foreignKey: 'in_topic',
        onDelete: 'cascade'
    })
  };

  return Topic;
}