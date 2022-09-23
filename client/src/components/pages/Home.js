import '../css/page.css'
import '../css/home.css'
import AnimatedPage from '../AnimatedPage'
import { Button } from '@nextui-org/react'

const Home = () => {
  return (
    <AnimatedPage>
    <div className="wrapper">
      <div className="container">
        <div className="Home-box">
          <div className="Home-left-box">
            <div className="Home-slogan">
              <h2>If you use this, </h2>
              <h2>but you don’t have honesty.</h2>
              <h2>It’ll be useless.</h2>
            </div>
            <div className="Home-desc">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ab?</p>
            </div>
            <div className="Home-try">
              <Button className="Home-margin-1" color="gradient" auto>Try</Button>
              <p className="Home-margin-1">let's save your money</p>
            </div>
          </div>
          <div className="Home-right-box">
            <div className="Home-img-box">
              <div className="Home-img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  )
}

export default Home