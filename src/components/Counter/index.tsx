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
}
const Counter: React.FC<any> = ({ max, min, onFinish }: IProps) => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
    onFinish(newNumber);
  };

  const decrease = () => {
    const newNumber = number - 1;
    setNumber(newNumber);
    onFinish(newNumber);
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
