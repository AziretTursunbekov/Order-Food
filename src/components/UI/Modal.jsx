import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
function Modal({ children, onClose }) {
  return (
    <>
      {createPortal(
        <Backdrop onClick={onClose}>
          <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
        </Backdrop>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
const Backdrop = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(11, 10, 10, 0.402);
`;
const Content = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 20px;
`;
