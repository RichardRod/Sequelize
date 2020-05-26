'use strict';

module.exports = (sequelize, DataTypes) => {

    return sequelize.define('permission', {
            id: {

                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            type: {
                type: DataTypes.STRING,
                require: true,
                allowNull: true
            }
        },
        {
            underscored: true,
            paranoid: true
        });
};