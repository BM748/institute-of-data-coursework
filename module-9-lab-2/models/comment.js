const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model { }


Comment.init({
    id:{
        type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true,
    },
    content:{
        type: DataTypes.STRING, allowNull:false, required:true

    }},

{
    sequelize: sequelizeInstance, modelName: "comment",
    timestamps: true, freezeTableName: true
}

)

module.exports = Comment;