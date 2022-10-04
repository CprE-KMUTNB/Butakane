import React, { useState } from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { UserIcon } from "./AuthIcon/UserIcon";
import { Password } from "./AuthIcon/Password";
import axios from 'axios'
import { authenticate,localAuthenticate } from '../services/authorize'

import { useNavigate } from "react-router-dom";

const RegButton = (props) => {

  const [checked, setChecked] = useState(false); 
  const handleChange = () => { 
    
    setChecked(!checked); 
    console.log({checked});
  }; 

  const navigate = useNavigate()
  const [state, setState] = useState({
    username: "",
    password: "",
    confirmPass: ""
  })

  const {username,password,confirmPass} = state

  // put value to state
  const inputValue = name => event => {
    setState({ ...state, [name]: event.target.value })
  }

  const submitReg = (e) => {
    e.preventDefault()
    axios
        .post(`${process.env.REACT_APP_API}/reg`, { username, password, confirmPass })
        .then(response => {
          axios
          .post(`${process.env.REACT_APP_API}/login`,{ username, password })
          .then(response => {
            if(checked===true){
              localAuthenticate(response,()=>navigate("/Wallet"))
            }else{
              authenticate(response,()=>navigate("/Wallet"))
            }

            setState({ ...state, username: "", password: "", confirmPass: "" })
          })
          .catch(err => {
            console.log(err);
          })
        })
        .catch(err => {
          console.log(err);
        })
    setVisible(false);
    console.log("closed");
  }

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto color="gradient" onClick={handler}>
        สมัครสมาชิก
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
           สมัครสมาชิก
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="ชื่อผู้ใช้"
            value={username}
            onChange={inputValue("username")}
            contentLeft={<UserIcon fill="currentColor" />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={inputValue("password")}
            contentLeft={<Password fill="currentColor" />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="ยืนยันรหัสผ่าน"
            value={confirmPass}
            onChange={inputValue("confirmPass")}
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox onChange={handleChange}>
              <Text size={14}>จำฉันไว้</Text>
            </Checkbox>
            {/* <Text size={14}>ลืมรหัสผ่าน?</Text> */}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            ยกเลิก
          </Button>
          <Button auto onClick={submitReg}>
            สมัคร
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegButton