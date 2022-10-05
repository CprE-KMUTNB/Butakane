const express = require("express")
const { getWalletInfo, income, outcome, getMoneyData } = require("../controllers/walletController")
const router = express.Router()

router.get('/wallet',getWalletInfo)
router.put('/income',income)
router.put('/outcome',outcome)
router.get('/moneyinfo',getMoneyData)

module.exports = router