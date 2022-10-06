import '../../css/wallet.css'
import { Text } from '@nextui-org/react'
import BorrowModal from '../../BorrowModal'
import LendModal from '../../LendModal'

const MyDebt = () => {
  return (
    <div className="wallet-content-page">
      <div className="wallet-content">
        <div className="mydebt-container">
          <div className="mydebt-area">
            <div className="debt-area-items">
              <div className="debt-balance">
                <div className="borrow-balance">
                  <p>Borrow - Balance</p>
                  <h2>999</h2>
                </div>
                <div className="lend-balance">
                  <p>Lend - Balance</p>
                  <h2>999</h2>
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

        <div className="detail-lists">
          <div className="des-detail-list">
              <span>ยืมเงินจาก USER1 - Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="amount-detail-list">
            <div className="amount-detail-lists">
              <div className="amount-detail">
                <Text size="$xl" color="success">+ 200</Text>
              </div>
              <div className="timestamp-detail">
                  <Text>6/10/2565</Text>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default MyDebt