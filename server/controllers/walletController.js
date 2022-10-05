const walletdata = require("../models/walletInfo")
const moneydata = require("../models/moneyInfo")
const jwt = require("jsonwebtoken")

exports.getWalletInfo=(req,res)=>{

    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    if(userinfo){
        var id = userinfo.userID
        walletdata.find({id}).exec((err,data)=>{
            res.json(data)
        })

    }
}
