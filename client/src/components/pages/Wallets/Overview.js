import React from 'react';
import '../../css/wallet.css'
import { Progress } from "@nextui-org/react";
import { getToken } from '../../../services/authorize';
import axios from 'axios';

const Overview = () => {

  let myGoalPg = 55;

  const [wallet,setWallet] = React.useState([])
  const token = getToken()
  const fetchData = ()=>{
    axios
    .get(`${process.env.REACT_APP_API}/wallet`,{
      headers:{
        'Authorization':token
        }
    
    })
    .then(response=>{
      setWallet(response.data[0].balance)
      
      
    })
    .catch(err=>alert(err))
    }
  React.useEffect(()=>{
    fetchData()// eslint-disable-next-line
  },[])

  const walletBalance = wallet;

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