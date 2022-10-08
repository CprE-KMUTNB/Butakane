import '../css/page.css'
import '../css/home.css'
import AnimatedPage from '../AnimatedPage'
import kafImg from '../assets/card-07.png'
import { Button } from '@nextui-org/react'
import { Modal, Text } from '@nextui-org/react'
import React from 'react'
import RegButton from '../RegButton'
import LoginButton from '../LoginButton'

const Home = () => {

  const [visible2, setVisible2] = React.useState(false);
  const handler2 = () => setVisible2(true);
  const closeHandler2 = () => {
    setVisible2(false);
    console.log("closed");
  };

  return (
    <AnimatedPage>
      <div className="wrapper">
        <div className="container">
          <div className="Home-box">
            <div className="Home-left-box">
              <div className="far-left-box">
                <h1>รู้หมือไร่ว่า <span className='blue-text'>Butakane</span> คืออะไร?</h1>
                <p className="op-50-text">Butakane คือ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores veritatis in recusandae sit iure mollitia commodi nihil doloremque libero minima vitae fugit maxime, consequuntur quod excepturi eligendi eum nesciunt temporibus.</p>
                <div className="Home-button-box">
                    <Modal
                      closeButton
                      blur
                      aria-labelledby="modal-title"
                      open={visible2}
                      onClose={closeHandler2}
                      // open
                    >
                      <Modal.Header>
                        <Text id="modal-title" size={18}>
                            ลงชื่อเข้าใช้
                        </Text>
                      </Modal.Header>
                      <Modal.Footer justify='center'>
                        <LoginButton />
                        <RegButton />
                      </Modal.Footer>
                    </Modal>
                    <Button shadow color="gradient" onClick={handler2}>
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