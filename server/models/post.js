'use strict';

export default function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Post;
};