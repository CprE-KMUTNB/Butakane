import '../../css/wallet.css'
import { Progress } from "@nextui-org/react";

const Overview = () => {

  let myGoalPg = 55;

  return (
    <div className="wallet-content-page">
      <div className="wallet-content">
          <div className="overview-area">
            <div className="overview-area-items">
              <div className="overview-area-item-1">
                <div className="item-balance"></div>
                <div className="items-wallet-action">
                  <div className="items-wallet-action-left">
                    <div className="item-wallet-income"></div>
                    <div className="item-wallet-outcome"></div>
                  </div>
                  <div className="item-mydebt"></div>
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