const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Holiday extends Model { }


Holiday.init({
   date:{
    type: DataTypes.DATEONLY, allowNull: false, required:true
   },
   
   name:{
    type: DataTypes.STRING, allowNull: false, required:true
   },

 },

 {
    sequelize: sequelizeInstance, modelName: "holidays",
    timestamps: true, freezeTableName: true
}

)

module.exports = Holiday
