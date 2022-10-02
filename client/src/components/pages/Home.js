import '../css/page.css'
import '../css/home.css'
import AnimatedPage from '../AnimatedPage'
import kafImg from '../assets/card-07.png'
import { Button } from '@nextui-org/react'

const Home = () => {
  return (
    <AnimatedPage>
      <div className="wrapper">
        <div className="container">
          <div className="Home-box">
            <div className="Home-left-box">
              <div className="far-left-box">
                <h2>If you use <span className='blue-text'>Butakane</span>,</h2>
                <h2>but you don’t have <span className='blue-text'>honesty</span>.</h2>
                <h2>It’ll be <span className='blue-text'>useless</span>.</h2>
                <p className="op-50-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, mollitia.</p>
                <div className="Home-button-box">
                    <Button shadow color="gradient">
                      ลองใช้เลย !
                    </Button>
                </div>
              </div>
            </div>
            <div className="Home-right-box">
              <img src={kafImg} alt="KAF" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Home