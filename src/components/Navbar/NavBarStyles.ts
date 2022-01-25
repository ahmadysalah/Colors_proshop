import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Column } from '../Col';
import { FlexBox } from '../Row';

export const InnerSection = styled(Column)`
  margin: 0 auto;
  max-width: 1640px;
  width: 100%;
`;

export const Badge = styled('div')`
  background: #fcdd06;
  border-radius: 50%;
  color: #242424;
  text-align: center;
  font-family: normal normal normal 10px/13px Muli;
  height: 15px;
  width: 15px;
  right: 8px;
  position: absolute;
  top: -5px;
  z-index: 1;
`;

export const SearchButton = styled(FlexBox)`
  cursor: pointer;
  align-items: center;
  background: #fcdd06;
  border-radius: 6px;
  display: flex;
<<<<<<< HEAD
  height: 100%;
=======
  height: 42px;
>>>>>>> c762a92c6895da335efb794b8e21789356e4201b
  justify-content: center;
  width: 21.5%;
`;
export const StyledSearchIcon = styled(AiOutlineSearch)`
  font-size: 18;
  margin-right: 10px;
`;

export const NavBox = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 36.7%;
  background: #fff;
  border-radius: 6px;
`;

export const CustomLink = styled(Link)`
  color: none;
  position: relative;
  text-decoration: none;
`;

export const Logo = styled('img')`
  height: 50px;
  object-fit: cover;
  opacity: 1;
  width: 180px;
`;

export const SearchInput = styled('input')`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 6px;
  height: 40px;
  opacity: 1;
  width: 36.7%;
  &:focus {
    border: none;
    outline: none;
  }
`;
export const List = styled('ul')`
  text-decoration: none;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ListItem = styled('li')`
  color: ${props => props.theme.primary?.darkYallow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  display: flex;
  letter-spacing: 0.2px;
  list-style: none;
  margin-left: 20px;
  opacity: 1;
  text-decoration: none;
  align-items: center;
`;

export const StyleObj: CSSProperties = {
  fontSize: 22,
  color: '#FCDD06',
  fill: '#FFF',
  margin: '0px auto',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'space-between',
  marginBottom: '10px',
};
