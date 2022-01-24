/* eslint-disable import/extensions */
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBookmarkDashFill, BsFillCartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { ListNavItem } from './ListNavItem';
import {
  List,
  LogoTextYellow,
  LogoTextWhite,
  StyleObj,
  NavBox,
  NavContainer,
  StyledSearchIcon,
  SearchButton,
  SearchInput,
  NavInnerSection,
  NavBoxLogo,
  NavTitle,
} from './NavBarStyles';
import { ContainerWrapper } from '../Container/style';
import Icon from '../Icon';

export const Navbar = () => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();
  const token = 'usedfk';
  return (
    <NavContainer>
      <NavBoxLogo>
        <LogoTextYellow to="/">Pro</LogoTextYellow>
        <LogoTextWhite to="/">Shop</LogoTextWhite>
      </NavBoxLogo>

      <NavBox style={{ background: '#FFF', borderRadius: 6 }}>
        <SearchInput
          value={value}
          type="text"
          placeholder="Search"
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <SearchButton
          onClick={() => {
            navigate(`/search${value ? `?keyword=${value}` : ''}`);
          }}
        >
          <StyledSearchIcon />
          Search
        </SearchButton>
      </NavBox>
      <NavBox>
        <List>
          <ListNavItem
            isBadge
            to={token ? '/profile' : '/login'}
            icon={<FaUserAlt style={StyleObj} />}
          >
            <NavTitle>{token ? 'Profile' : 'Login / Sign up'}</NavTitle>
          </ListNavItem>
          <ListNavItem
            isBadge
            countBadge={2}
            to={token ? '/profile' : '/login'}
            icon={<BsFillBookmarkDashFill style={StyleObj} />}
          >
            <NavTitle>WishList</NavTitle>
          </ListNavItem>

          {token && (
            <>
              <ListNavItem
                to="/cart"
                isBadge
                countBadge={2}
                icon={<BiLogOut style={StyleObj} />}
              />
              <ListNavItem
                to="/cart"
                onClick={() => console.log('out')}
                icon={<BsFillCartFill style={StyleObj} />}
              />
            </>
          )}
        </List>
      </NavBox>
    </NavContainer>
  );
};
