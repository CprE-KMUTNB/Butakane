const express = require("express")
const { getWalletInfo } = require("../controllers/walletController")
const router = express.Router()

router.get('/wallet',getWalletInfo)

module.exports = router