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
        description: {
            type: DataTypes.TEXT
        }
    },{
        timestamp: true,
        hooks: {}
    });

    Topic.associate = (models) => {
      Topic.belongsToMany(models.Post,{
          through: 'Post_Topics'
       })
    }
  
}