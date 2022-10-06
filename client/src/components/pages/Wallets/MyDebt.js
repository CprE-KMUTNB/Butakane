import '../../css/wallet.css'
import { Text } from '@nextui-org/react'
import BorrowModal from '../../BorrowModal'
import LendModal from '../../LendModal'
import React from 'react'
import axios from 'axios'
import { getToken } from '../../../services/authorize'

const MyDebt = () => {

  var [info,setInfo] = React.useState([])
  const [borrow,setBorrow] = React.useState()
  const [lend,setLend] = React.useState()
  const token = getToken()
  const fetchData =()=>{
    axios.get(`${process.env.REACT_APP_API}/borrowInfo`,{
      headers:{
        "Authorization":token
      }
    })
    .then(response=>{
      setBorrow(response.data[0].balance)
    }).catch(err=>alert(err))

    axios.get(`${process.env.REACT_APP_API}/lendInfo`,{
      headers:{
        "Authorization":token
      }
    })
    .then(response=>{
      setLend(response.data[0].balance)
    }).catch(err=>alert(err))
    axios
    .get(`${process.env.REACT_APP_API}/debtInfo`,
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
  return (
    <div className="wallet-content-page">
      <div className="wallet-content">
        <div className="mydebt-container">
          <div className="mydebt-area">
            <div className="debt-area-items">
              <div className="debt-balance">
                <div className="borrow-balance">
                  <p>Borrow - Balance</p>
                  <h2>{borrow}</h2>
                </div>
                <div className="lend-balance">
                  <p>Lend - Balance</p>
                  <h2>{lend}</h2>
                </div>
              </div>
              <div className="debt-button">
                <BorrowModal />
                <LendModal />
              </div>
            </div>          
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
                  <span>ให้ {data.name} ยืมเงิน - {data.detail}</span>
                </div>
              )
            }
            {
              !(data.type) && (
                <div className="des-detail-list">
                  <span>ยืมเงินจาก {data.name} - {data.detail}</span>
                </div>
              )
            }
            <div className="amount-detail-list">
              <div className="amount-detail-lists">
                {
                  data.type && (
                    <div className="amount-detail">
                      <Text size="$xl" color="error">- {data.amount}</Text>
                    </div>
                  )
                }
                {
                  !(data.type) && (
                    <div className="amount-detail">
                      <Text size="$xl" color="success">+ {data.amount}</Text>
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

export default MyDebt