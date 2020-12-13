/** @format */

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.scss";

export default function SimpleModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal"
      >
        <Modal.Header className="header">
          <Modal.Title>사용자 선택</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body">
          어떤 역할을 가지고 계신가요?
          <div className="boxes">
            <div className="box-1">평가자 <span className="sub-text">Inspector</span></div>
            <div className="box-2">번역사 <span className="sub-text">Translator</span></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-1" variant="secondary" onClick={handleClose}>
            다음
          </Button>
          <Button className="btn-2" variant="primary">
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
