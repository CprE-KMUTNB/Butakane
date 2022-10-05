// id, money ,type(income,Outcome)

const mongoose = require("mongoose")

const inAndOutSchema = mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    amout:{
        type:Number,
        require:true
    },
    type:{
        type:Boolean,
        require:true
    }

},{timestamps:true})

module.exports = mongoose.model("moneydata",inAndOutSchema)