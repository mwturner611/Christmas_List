

module.exports = function (sequelize, DataTypes){
    var Gift = sequelize.define("Gift", {
        descr:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        person: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: DataTypes.STRING, 
        purchased:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        } 
    });
    return Gift;
};