import '../../css/wallet.css'

const MyDebt = () => {
  return (
    <div className="wallet-content-page">
      <div className="wallet-content">
        <div className="mydebt-container">
          <div className="mydebt-area">
            <div className="debt-area-items">
              <div className="debt-balance">
                <div className="borrow-balance"></div>
                <div className="lend-balance"></div>
              </div>
              <div className="debt-button">
                <button className="borrow-button">ขอยืม</button>
                <button className="lend-button">ให้ยืม</button>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyDebt