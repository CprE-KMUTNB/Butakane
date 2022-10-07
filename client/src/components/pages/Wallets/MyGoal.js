import '../../css/wallet.css'
import { Input, Progress } from "@nextui-org/react";

const MyGoal = () => {
  return (
    <div className="wallet-content-page">
      <div className="wallet-content">
        <div className="mygoal-container">
          <div className="mygoal-area">
            <div className="goal-area-items">
              <div className="goal-header"><h2>เป้าหมายของคุณ !</h2></div>
              <div className="goal-info">
                <Input className='goal-input' clearable placeholder="เป้าหมาย" initialValue="เป้าหมาย" status="default" width='80%' />
                <div className="goal-img">
                  <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_TH_LANG_TH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1654014006419" alt="" />
                </div>
                <Input className='goal-input' clearable placeholder="url รูปภาพ" initialValue="Url รูปภาพ" status="default" width='80%' />
                <div className="goal-progress">
                  <Progress shadow value={200} max={2500} />
                </div>
                <Input className='goal-input' clearable placeholder="ราคา" initialValue="ราคา" status="default" width='80%' />
                
                <button className='goal-save'>บันทึกข้อมูล</button>
                <button className='goal-income'>ฝากเพิ่ม</button>
                <button className='goal-reset'>รีเซ็ต</button>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyGoal