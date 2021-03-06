'use strict';

module.exports = (sequelize, DataTypes) => {

    return sequelize.define('user', {
            id: {

                type: DataTypes.UUID,
                primaryKey: true
            },
            first_name: {
                type: DataTypes.STRING,
                isAlphanumeric: true,
                required: true,
                allowNull: true
            },
            last_name: {
                type: DataTypes.STRING,
                required: true,
                allowNull: true
            },
            username: {
                type: DataTypes.STRING,
                required: true,
                allowNull: true,
                len: [7, 50],
                isEmail: true
            },
            permission_id: {
                //fk in permission table
                type: DataTypes.INTEGER,
                required: true,
                allowNull: false
            }
        },
        {
            underscored: true,
            paranoid: true
        });
};