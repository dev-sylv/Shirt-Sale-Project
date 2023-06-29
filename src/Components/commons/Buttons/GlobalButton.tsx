import React from "react";
import styled from "styled-components";

interface Button {
  text: string;
  borderR: string;
  bgC: string;
  CC: string;
}

const GlobalButton: React.FC<Button> = ({ text, borderR, bgC, CC }) => {
  return (
    <div>
      <ButtonProps borderR={borderR} CC={CC} bgC={bgC}>
        {text}
      </ButtonProps>
    </div>
  );
};

export default GlobalButton;

const ButtonProps = styled.div<{ bgC: string; CC: string; borderR: string }>`
  background-color: ${(props) => props.bgC};
  color: ${(props) => props.CC};
  border: none;
  outline: none;
  border-radius: ${(props) => props.borderR};
  padding: 20px 40px;
  transition: all 350ms;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  /* :hover{
        transform: scale(0.95);
        color: black;
        background-color: white;
    } */
`;
