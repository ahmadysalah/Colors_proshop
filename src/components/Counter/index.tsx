import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Icon } from '..';
import { Button } from '../Button/ButtonStyle';

const Count = styled.div`
  width: 8rem;
  height: 1.8rem;
  display: flex;
  flex-direction: row;
`;

const Value = styled.div`
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeeeee;
`;

interface IProps {
  max: number;
  min: number;
  onFinish: any;
  addQnt: number;
}
const Counter: React.FC<any> = ({ max, min, onFinish, addQnt = 0 }: IProps) => {
  const [number, setNumber] = useState(1);

  const increase = () => {
    setNumber(prev => prev + addQnt);
  };

  const decrease = () => {
    if (number > max && number < 1) {
      return;
    }
    setNumber(prev => {
      onFinish(prev - 1);
      return prev - 1;
    });
    handleDecrease();
  };

  return (
    <>
      <Count>
        <Button
          width="2rem"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          padding="none"
          onClick={decrease}
          disabled={number === min}
        >
          <Icon icon={<AiOutlineMinus />} />
        </Button>
        <Value>{number}</Value>
        <Button
          width="2rem"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          padding="none"
          onClick={increase}
          disabled={number === max}
        >
          <Icon icon={<AiOutlinePlus />} />
        </Button>
      </Count>
    </>
  );
};

export default Counter;
function handleDecrease() {
  console.log('Function not implemented.');
}
