import React from "react";
import { CartItem } from "./CartItem";
import Modal from "../UI/Modal";
import styled from "styled-components";

export default function Cart() {
  return (
    <Modal>
      <Cartcontent>
        <ul>
          <CartItem />
        </ul>
      </Cartcontent>
    </Modal>
  );
}
const Cartcontent = styled.div`
  width: 671px;
  height: 437px;
  border-radius: 20px;
  padding: 40px 32px;
  &:ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
