'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Post)
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING(50)
            },
            password: {
                type: DataTypes.STRING(20)
            },
            email: {
                type: DataTypes.STRING(50)
            },
            admin_root: {
                type: DataTypes.BOOLEAN
            }
        },
        {
            sequelize,
            modelName: 'User'
        });
    return User;
};