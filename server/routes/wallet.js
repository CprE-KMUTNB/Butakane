const express = require("express")
const 
    { 
        getWalletInfo, 
        income, 
        outcome, 
        getMoneyData, 
        borrow, 
        lend, 
        getBorrowInfo, 
        getLendInfo, 
        getDebtData,
        removeDebt,
        payBack,
        receiveBack,
        getGoalData,
        myGoal
    } = require("../controllers/walletController")
const router = express.Router()

router.get('/wallet',getWalletInfo)
router.get('/borrowInfo',getBorrowInfo)
router.get('/lendInfo',getLendInfo)

router.put('/income',income)
router.put('/outcome',outcome)

router.get('/moneyinfo',getMoneyData)
router.get('/debtinfo',getDebtData)
router.get('/goalinfo',getGoalData)

router.post('/borrow',borrow)
router.post('/lend',lend)

router.put('/payback',payBack)
router.put('/receiveback',receiveBack)

router.put('/savegoal',myGoal)
module.exports = router