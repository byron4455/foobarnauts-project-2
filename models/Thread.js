module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
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

  Thread.associate = (models) => {
    Thread.belongsTo(models.User, {
    }),
    Thread.hasMany(models.Comment, {
        foreignKey: 'in_topic',
        onDelete: 'cascade'
    })
  };

  return Thread;
}