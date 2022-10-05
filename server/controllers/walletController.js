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


exports.income=(req,res)=>{
    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    const { amount ,detail } = req.body
    if(userinfo){
        var id = userinfo.userID
        const type = true
        
        switch(true){
            case !amount:{
                return res.status(400).json({error:"Please enter your amount of money"})
                break;
            }
        }

        moneydata.create({id,amount,type,detail},(err,data)=>{
            if(err){
                res.status(400).json({error:err})
                console.log(err);
            }
            res.json(data)
        })

        walletdata.find({id}).exec((err,data)=>{

            if(err) console.log(err)
            console.log(data[0])
            var balanceInt = parseInt(data[0].balance)
            balanceInt = balanceInt + parseInt(amount)
            var balance = String(balanceInt)
            walletdata.findOneAndUpdate({id},{balance}).exec((err,data)=>{
                if(err) console.log(err)
            })
            
        })
    }
}

exports.outcome=(req,res)=>{
    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    const { amount,detail } = req.body
    if(userinfo){
        var id = userinfo.userID
        const type = false
        
        switch(true){
            case !amount:{
                return res.status(400).json({error:"Please enter your amount of money"})
                break;
            }
        }

        moneydata.create({id,amount,type,detail},(err,data)=>{
            if(err){
                res.status(400).json({error:err})
                console.log(err);
            }
            res.json(data)
        })

        walletdata.find({id}).exec((err,data)=>{

            if(err) console.log(err)
            console.log(data[0])
            var balanceInt = parseInt(data[0].balance)
            balanceInt = balanceInt - parseInt(amount)
            var balance = String(balanceInt)
            walletdata.findOneAndUpdate({id},{balance}).exec((err,data)=>{
                if(err) console.log(err)
            })
            
        })
    }
}

exports.getMoneyData=(req,res)=>{
    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    if(userinfo){
        var id = userinfo.userID

        moneydata.find({id}).exec((err,data)=>{
            res.json(data)
        })
    }
}