import '../../css/wallet.css'
import { Input, Progress } from "@nextui-org/react";
import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../../services/authorize';
import GoalIncomeModal from '../../GoalIncomeModal';
import GoalOutcomeModal from '../../GoalOutcomeModal';


const MyGoal = () => {

  const [state,setState] = useState({
    item:"",
    price:"",
    url:""
  })

  const token = getToken()
  const {item,price,url} = state

  // put value to state
  const inputValue = name => event => {
    setState({ ...state, [name]: event.target.value })
  }

  const fetchData = ()=>{
    axios.get(`${process.env.REACT_APP_API}/goalinfo`,{
      headers:{
        "Authorization":token
      }
    })
    .then(response=>{
      setState(response.data[0])
    }).catch(err=>alert(err))
  }

  const submitGoal = (e) => {
    e.preventDefault()
    axios
    .put(`${process.env.REACT_APP_API}/savegoal`,
    {item,price,url},
    {
      headers:{
        'Authorization':token
      }
    })
    .then(response=>{
      fetchData()
    })

  }

  React.useEffect(()=>{
    fetchData()// eslint-disable-next-line
  },[])

  return (
    <div className="wallet-content-page">
      <div className="wallet-content">
        <div className="mygoal-container">
          <div className="mygoal-area">
            <div className="goal-area-items">
              <div className="goal-header"><h2>เป้าหมายของคุณ !</h2></div>
              <div className="goal-info">
                <Input className='goal-input' value={item} onChange={inputValue("item")} clearable placeholder="เป้าหมาย" initialValue={item} status="default" width='80%' />
                <div className="goal-img">
                  <img src={url} alt="" />
                </div>
                <Input className='goal-input' value={url} onChange={inputValue("url")} clearable placeholder="url" initialValue={url} status="default" width='80%' />
                <h3>สะสมได้ <span>999</span> จาก <span>{price}</span> </h3>
                <div className="goal-progress">
                  <Progress shadow value={200} max={2500} />
                </div>
                <Input className='goal-input' value={price} onChange={inputValue("price")} clearable placeholder="ราคา" initialValue={price} status="default" width='80%' />

                <button className='goal-save' onClick={submitGoal}>บันทึกข้อมูล</button>
                <GoalIncomeModal/>
                <GoalOutcomeModal />
                {/* <button className='goal-income'>ฝากเพิ่ม</button> */}
                <button className='goal-reset'>ทำตามเป้าหมายสำเร็จแล้ว</button>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyGoal