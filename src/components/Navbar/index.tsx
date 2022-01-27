import { useCallback, useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import {
  BsFillBookmarkDashFill,
  BsFillCartFill,
  BsToggleOff,
  BsToggleOn,
} from 'react-icons/bs';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { FiSettings } from 'react-icons/fi';
import { DarkTheme } from 'styled-components';
import { ListNavItem } from './ListNavItem';

import {
  List,
  StyleObj,
  NavBox,
  StyledSearchIcon,
  SearchButton,
  SearchInput,
  ListNav,
  IconList,
  NavIcon,
  Hamburger,
  IConsContainer,
} from './NavBarStyles';
import { Container, Typography } from '..';
import Logo from './Logo/Logo';
import { useToken } from '../../utils/helper/useToken';
import { AppState } from '../../redux/store';
import { ActionCartType } from '../../redux/Cart/type';
import { getProfile } from '../../redux/User/action';
import { IUser } from '../../redux/Auth/type';
import { logoutSuccess } from '../../redux/Auth/action';

const Style = {
  color: '#FFF',
  fill: '#FFF',
  marginRight: '5px',
  marginBottom: '2px',
  lineHieght: '1px',
};

export const Navbar = ({ open }) => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();
  const user: IUser = useToken();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();
  const cart = useSelector((state: AppState) => state.user.myProfile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const Logout = () => {
    dispatch(logoutSuccess());
    navigate('/login');
  };
  return (
    <ListNav open={open}>
      <Logo />
      <NavBox style={{ margin: 'auto' }}>
        <SearchInput
          value={value}
          type="text"
          style={{ fontFamily: 'mulish' }}
          placeholder="Iphone"
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <SearchButton
          style={{ fontFamily: 'mulish' }}
          onClick={() => {
            navigate(`/search${value ? `?keyword=${value}` : ''}`);
          }}
        >
          <StyledSearchIcon />
          Search
        </SearchButton>
      </NavBox>
      <NavIcon style={{ width: '15%' }}>
        <IConsContainer>
          {user.isAdmin ? (
            <IconList>
              <FiSettings size="1.2em" style={Style} />
              Admin
            </IconList>
          ) : null}
          {user?._id ? (
            <Link
              to="/profile"
              style={{ textDecoration: 'none', fontFamily: 'mulish' }}
            >
              <IconList>
                <FaUserAlt size="1.5em" style={Style} />
                {`${user.firstName} ${user.lastName}`}
              </IconList>
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: 'none', fontFamily: 'mulish' }}
            >
              <IconList>
                <FaUserAlt size="1.2em" style={Style} />
                Login/Signup
              </IconList>
            </Link>
          )}
          <Link
            to="/cart"
            style={{ textDecoration: 'none', fontFamily: 'mulish' }}
          >
            <IconList>
              <span>5</span> <BsFillCartFill size="1.2em" style={Style} />
              Cart
            </IconList>
          </Link>
          {user?._id && (
            <IconList onClick={Logout}>
              <BiLogOut size="2em" style={Style} />
              Logout
            </IconList>
          )}
        </IConsContainer>
      </NavIcon>
    </ListNav>
  );
};
