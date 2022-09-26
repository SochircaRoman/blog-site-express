'use strict';

const { Model } = require('mongoose');
module.exports = (mongoose, DataTypes) => {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        required: true
      },
      content: {
        type: DataTypes.STRING,
        required: true
      },
      picture: {
        type: DataTypes.STRING,
        required: true
      }
    },
    {
      mongoose,
      modelName: 'Post'
  });
  return Post;
};