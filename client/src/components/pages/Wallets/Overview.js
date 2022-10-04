import React from 'react';
import '../../css/wallet.css'
import { Progress } from "@nextui-org/react";

const Overview = () => {

  let myGoalPg = 55;

  const walletBalance = "99,999";

  return (
    <div className="wallet-content-page">
      <div className="wallet-content">
          <div className="overview-area">
            <div className="overview-area-items">
              <div className="overview-area-item-1">
                <div className="item-balance">
                  <p>Wallet - Balance</p>
                  <h2>{walletBalance}</h2>
                </div>
                <div className="items-wallet-action">
                  <div className="items-wallet-action-left">
                    <button className="item-wallet-income"></button>
                    <button className="item-wallet-outcome"></button>
                  </div>
                  <div className="item-mydebt">MyDebt</div>
                </div>
              </div>
              <div className="overview-area-item-2">
                <Progress color="primary" value={myGoalPg} />
              </div>
              <div className="overview-area-item-3"></div>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Overview