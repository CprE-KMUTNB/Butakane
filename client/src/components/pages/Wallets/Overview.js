import React from 'react';
import '../../css/wallet.css'
import { Progress, Text } from "@nextui-org/react";
import { getToken } from '../../../services/authorize';
import IncomeModal from '../../IncomeModal';
import OutcomeModal from '../../OutcomeModal';
import Neko from '../../assets/neko_tsukareta2.png'
import axios from 'axios';

const Overview = () => {

  let myGoalPg = 55;

  var [info,setInfo] = React.useState([])

  const [wallet,setWallet] = React.useState([])
  const token = getToken()
  const fetchData = ()=>{

    axios
    .get(`${process.env.REACT_APP_API}/wallet`,
    {
      headers:{
        'Authorization':token
        }
    })
    .then(response=>{
      setWallet(response.data[0].balance)
    })
    .catch(err=>alert(err))

    axios
    .get(`${process.env.REACT_APP_API}/moneyinfo`,
    {
      headers:{
        'Authorization':token
        }
    })
    .then(response=>{
      setInfo(response.data)
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
                    {/* <button className="item-wallet-income"></button> */}
                    <IncomeModal />
                    <OutcomeModal />
                    {/* <button className="item-wallet-outcome"></button> */}
                  </div>
                  <div className="item-sticker">
                    <img src={Neko} alt="Neko" />
                  </div>
                </div>
              </div>
              <div className="overview-area-item-2">
                <Progress color="primary" value={myGoalPg} />
              </div>
              <div className="overview-area-item-3"></div>
            </div>
          </div>

          <div className="detail-title">
            <span>รายการ</span>
          </div>
        {info.slice(0).reverse().map((data,index)=>(
          <div className="detail-lists" key={index}>
            {
              data.type && (
                <div className="des-detail-list">
                  <span>รายรับ - {data.detail}</span>
                </div>
              )
            }
            {
              !(data.type) && (
                <div className="des-detail-list">
                  <span>รายจ่าย - {data.detail}</span>
                </div>
              )
            }
            <div className="amount-detail-list">
              <div className="amount-detail-lists">
                {
                  data.type && (
                    <div className="amount-detail">
                      <span size="$xl" color="success">+ {data.amount}</span>
                    </div>
                  )
                }
                {
                  !(data.type) && (
                    <div className="amount-detail">
                      <Text size="$xl" color="error">- {data.amount}</Text>
                    </div>
                  )
                }
                
                <div className="timestamp-detail">
                  <Text>{new Date(data.createdAt).toLocaleString()}</Text>
                </div>
              </div>
            </div>
          </div>
        ))}
          
      </div>
    </div>
  )
}

export default Overview