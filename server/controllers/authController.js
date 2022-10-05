const usersdata = require("../models/authInfo")
const walletdata = require("../models/walletInfo")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register=(req,res)=>{

    var {username,password,confirmPass} = req.body

    switch(true){
        case !username:{
            return res.status(400).json({error:"Please enter your username"})
            break;
        }
        case !password:{
            return res.status(400).json({error:"Please enter your password"})
            break;
        }
        case password!=confirmPass:{
            return res.status(400).json({error:"Password doesn't match"})
            break;
        }
    }

    //encrypt password
    bcrypt.genSalt(15,(err,salt)=>{
        bcrypt.hash(password,salt,(err,hash)=>{
            password = hash
            //save data
            usersdata.create({username,password},(err,data)=>{
                if(err){
                    res.status(400).json({error:"Username has been used"})
                }
                var idStr = JSON.stringify(data._id)
                var id = JSON.parse(idStr)
                var balance = '0'
                walletdata.create({id,balance},(err,data)=>{
                    if(err){
                        res.status(400).json({err})
                    }
                    res.status(200).json(data)
                })
             })
        })
    })
}

exports.login=(req,res)=>{

    const {username,password} = req.body
    switch(true){
        case !username:{
            return res.status(400).json({error:"Please enter your username"})
            break;
        }
        case !password:{
            return res.status(400).json({error:"Please enter your password"})
            break;
        }
    }
    usersdata.findOne({username})
    .then((user)=>{
        if(user){
            bcrypt
            .compare(password,user.password)
            .then((passwordCheck)=>{
                if(!passwordCheck){
                    return res.status(400).json({
                        error:"Password doesn't match"
                    })
                }
                const token = jwt.sign({
                    userID : user._id,
                    userName : user.username
                },
                process.env.TOKEN_ENCODE,
                {expiresIn:"24h"}
                )
                res.status(200).json(
                {
                    message:`You have been login to ${username} successfully.`,
                    userName : user.username,
                    token
                })
            })
            .catch((err)=>{
                res.status(400).json({
                    error:"Password doesn't match",
                    err
                })
            })
        }else{
            res.status(400).json({
                error:"Username doesn't exist."
            })
        }
    })
    .catch((err)=>{
        if(err) console.log(err);
    })

    


}