'use strict';

const { Model } = require('mongoose');
module.exports = (mongoose, DataTypes) => {
  Post.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING(150),
        required: true
      },
      description: {
        type: DataTypes.STRING(5000),
        required: true
      },
      author: {
        type: DataTypes.STRING(50),
        required: true
      },
      picture: {
        type: DataTypes.STRING(60),
        required: true
      }
    },
    {
      mongoose,
      modelName: 'Post'
  });
  return Post;
};