import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";


const DeleteAccountModal = () => {

  
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

    

  return (
    <>
      <Button color="error" auto ghost onClick={handler}>ลบบัญชี</Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            คุณต้องการ <Text b size={24} color="error">ลบ</Text> บัญชีใช่หรือไม่
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Button shadow color="error" auto>
            ตกลง
        </Button>
        <Button auto flat color="error" onClick={closeHandler}>
            ยกเลิก
        </Button>
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteAccountModal