import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "./LoginButton/Mail";
import { Password } from "./LoginButton/Password";

const RegButton = () => {
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
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="รหัสผ่าน"
            contentLeft={<Password fill="currentColor" />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="รหัสผ่าน"
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>จำฉันไว้</Text>
            </Checkbox>
            <Text size={14}>ลืมรหัสผ่าน?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            ยกเลิก
          </Button>
          <Button auto onClick={closeHandler}>
            สมัคร
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegButton