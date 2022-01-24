import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBookmarkDashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ListNavItem } from './ListNavItem';
import {
  List,
  StyleObj,
  NavBox,
  StyledSearchIcon,
  SearchButton,
  SearchInput,
} from './NavBarStyles';
import { Container, Typography } from '..';
import Logo from './Logo/Logo';

export const Navbar = () => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();
  const token = 'usedfk';
  return (
    <Container
      direction="row"
      width="100%"
      height="85px"
      background-color="#242424"
      justifyContent="space-between"
    >
      <Container width="16.6%">
        <Logo />
      </Container>
      <NavBox>
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

      <Container direction="row" padding-top="18px" width="19.4%">
        <List>
          <ListNavItem
            isBadge
            to={token ? '/profile' : '/login'}
            icon={<FaUserAlt style={StyleObj} />}
          >
            <Typography
              variant="p"
              fontSize="13px"
              color="white"
              margin-bottom="18px"
            >
              {token ? 'Profile' : 'Login / Sign up'}
            </Typography>
          </ListNavItem>
          <ListNavItem
            isBadge
            countBadge={2}
            to={token ? '/profile' : '/login'}
            icon={<BsFillBookmarkDashFill style={StyleObj} />}
          >
            <Typography
              variant="p"
              fontSize="13px"
              color="white"
              margin-bottom="18px"
            >
              WishList
            </Typography>
          </ListNavItem>
<<<<<<< HEAD

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
=======
>>>>>>> c762a92c6895da335efb794b8e21789356e4201b
        </List>
      </Container>
    </Container>
  );
};
