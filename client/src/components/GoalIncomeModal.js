import React from 'react'
import { Modal, Input, Button, Text } from "@nextui-org/react";
import { WalletIcon } from './userIcon/WalletIcon';

const GoalIncomeModal = () => {

    
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

  return (
    <>
        <button className='goal-income' onClick={handler}>
            ฝากเพิ่ม
        </button>

        <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
            <Text id="modal-title" size={18}>
                ฝากเข้ากระปุกออมสิน
            </Text>
            </Modal.Header>
            <Modal.Body>
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="จำนวน"
                contentLeft={<WalletIcon fill="currentColor" />}
            />
            </Modal.Body>
            <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
                Close
            </Button>
            <Button auto >
                บันทึก
            </Button>
            </Modal.Footer>
        </Modal>
        </>
  )
}

export default GoalIncomeModal