const walletdata = require("../models/walletInfo")
const moneydata = require("../models/moneyInfo")
const debtdata = require("../models/debtInfo")
const borrowdata = require("../models/borrowInfo")
const lenddata = require("../models/lendInfo")
const goaldata = require("../models/goalInfo")
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

exports.getBorrowInfo=(req,res)=>{

    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    if(userinfo){
        var id = userinfo.userID
        borrowdata.find({id}).exec((err,data)=>{
            res.json(data)
        })

    }
}

exports.getLendInfo=(req,res)=>{

    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    if(userinfo){
        var id = userinfo.userID
        lenddata.find({id}).exec((err,data)=>{
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

exports.getDebtData=(req,res)=>{
    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    if(userinfo){
        var id = userinfo.userID
        debtdata.find({id}).exec((err,data)=>{
            res.json(data)
        })
    }
}

exports.getGoalData=(req,res)=>{
    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    if(userinfo){
        var id = userinfo.userID
        goaldata.find({id}).exec((err,data)=>{
            res.json(data)
        })
    }
}

exports.removeDebt=(req,res)=>{

    const _id = req.body

    debtdata.findByIdAndRemove(_id).exec((err,data)=>{
        if(err) console.log(err);
    })
}

exports.borrow=(req,res)=>{
    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    const { name,amount,detail } = req.body
    if(userinfo){
        var id = userinfo.userID
        const type = false

        switch(true){
            case !amount:{
                return res.status(400).json({error:"Please enter your amount of money"})
                break;
            }
            case !name:{
                return res.status(400).json({error:"Please enter name of loaner"})
                break;
            }
        }

        debtdata.create({id,name,amount,detail,type},(err,data)=>{
            if(err){
                res.status(400).json({error:err})
                console.log(err);
            }
            res.json(data)
        })
        borrowdata.find({id}).exec((err,data)=>{
            if(err) console.log(err)
            var balanceInt = parseInt(data[0].balance)
            balanceInt = balanceInt + parseInt(amount)
            var balance = String(balanceInt)
            borrowdata.findOneAndUpdate({id},{balance}).exec((err,data)=>{
                if(err) console.log(err)
            })
        })        

    }
}

exports.lend=(req,res)=>{
    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    const { name,amount,detail } = req.body
    if(userinfo){
        var id = userinfo.userID
        const type = true

        switch(true){
            case !amount:{
                return res.status(400).json({error:"Please enter your amount of money"})
                break;
            }
            case !name:{
                return res.status(400).json({error:"Please enter name of loaner"})
                break;
            }
        }

        debtdata.create({id,name,amount,detail,type},(err,data)=>{
            if(err){
                res.status(400).json({error:err})
                console.log(err);
            }
            res.json(data)
        })   
        lenddata.find({id}).exec((err,data)=>{
            if(err) console.log(err)
            var balanceInt = parseInt(data[0].balance)
            balanceInt = balanceInt + parseInt(amount)
            var balance = String(balanceInt)
            lenddata.findOneAndUpdate({id},{balance}).exec((err,data)=>{
                if(err) console.log(err)
            })
        })       

    }
}

exports.payBack=(req,res)=>{

    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    const { _id, amount } = req.body
    if(userinfo){

        var id = userinfo.userID
    
        debtdata.findByIdAndRemove(_id).exec((err,data)=>{
            if(err) console.log(err);
        })

        borrowdata.find({id}).exec((err,data)=>{
            if(err) console.log(err)
            var balanceInt = parseInt(data[0].balance)
            balanceInt = balanceInt - parseInt(amount)
            var balance = String(balanceInt)
            borrowdata.findOneAndUpdate({id},{balance}).exec((err,data)=>{
                if(err) console.log(err)
            })
        })
    }
}

exports.receiveBack=(req,res)=>{

    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    const { _id, amount } = req.body
    if(userinfo){

        var id = userinfo.userID
    
        debtdata.findByIdAndRemove(_id).exec((err,data)=>{
            if(err) console.log(err);
        })

        lenddata.find({id}).exec((err,data)=>{
            if(err) console.log(err)
            var balanceInt = parseInt(data[0].balance)
            balanceInt = balanceInt - parseInt(amount)
            var balance = String(balanceInt)
            lenddata.findOneAndUpdate({id},{balance}).exec((err,data)=>{
                if(err) console.log(err)
            })
        })
    }
}

exports.myGoal=(req,res)=>{
    const token = req.headers.authorization
    var userinfo = jwt.decode(token)
    const { item, price, url } = req.body
    if(userinfo){

        var id = userinfo.userID
        goaldata.findOneAndUpdate({id},{item,price,url}).exec((err,data)=>{
            if(data===null){
                goaldata.create({id,item,price,url},(err,data)=>{
                    if(err) res.status(400).json({error:err})
                    
                })
            }
            res.status(200).json(data)
        })

    }
}
