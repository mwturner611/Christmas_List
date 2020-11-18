module.exports = function(sequelize, DataTypes){
    var List = sequelize.define("List", {
        gift: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        person: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    return List;
}