import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";
// import PlusIcon from "../../assets/icons/PlusIcon.svg";

export const CartItem = () => {
  return (
    <ListStyle>
      <StyledContainerName>
        <h2>Barbecue Burger</h2>
        <WrapperPrice>
          <b>$22.4 </b>
          <span>x1</span>
        </WrapperPrice>
      </StyledContainerName>
      <WrapperButtons>
        <Button borderStyle="none" variant="outlined">
          -
        </Button>
        <Button borderStyle="none" variant="outlined">
          + 
        </Button>
      </WrapperButtons>
    </ListStyle>
  );
};

const ListStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d6d6d6;
  padding-bottom: 24px;
`;

const StyledContainerName = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: #222;
    font-size: 20px;
    font-weight: 600;
  }
`;

const WrapperPrice = styled.div`
  display: flex;
  gap: 47px;
  b {
    color: #ad5502;
    font-size: 18px;
    font-weight: 600px;
  }

  span {
    width: 46px;
    height: 2rem;
    border: 1px solid #d6d6d6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  }
`;

const WrapperButtons = styled.div`
  display: flex;
  gap: 20px;
`;