const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const User = require("./user");

class Post extends Model{ }

Post.init({
    id: {
        type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true,
    },
    title:{
        type:DataTypes.STRING,allowNull: false, required:true,
    },
    description:{
        type: DataTypes.STRING, allowNull: true, required: false
    },
    image: {type: DataTypes.STRING, allowNull: false, required: true,
    }},

    {
        sequelize: sequelizeInstance, modelName: "posts",
        timestamps: true, freezeTableName: true
    }
    )
    // Post.belongsTo(User);

    module.exports = Post;