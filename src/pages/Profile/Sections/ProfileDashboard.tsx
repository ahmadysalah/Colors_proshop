import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { Container, Divider, Image, Typography } from '../../../components';
import { AuthActions } from '../../../redux/Auth/action';
import { IUser, TAllActionAuth } from '../../../redux/Auth/type';
import { AppState } from '../../../redux/store';
import {
  DashboardContainer,
  DashImgContainer,
  NavLink,
  OutLink,
} from '../style';

interface IProfileDashboard {
  user?: IUser;
}

const ProfileDashboard = ({ user }: IProfileDashboard) => {
  const navigation = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, TAllActionAuth>>();
  const handleLoagout = () => {
    dispatch(
      AuthActions.logoutSuccess(() => {
        navigation('/login');
      }),
    );
  };
  return (
    <DashboardContainer
      direction="column"
      align-items="flex-start"
      flex-basis="30%"
      height="528px"
      background="#F2F2F2"
      border-radius="16px"
      margin="0 0 2em 0"
      padding="0"
    >
      <DashImgContainer>
        <Image
          src={user?.profileImage}
          width="137px"
          height="137px"
          style={{ borderRadius: '50%' }}
        />
        <Typography variant="h2" margin="0.5em 0 0 0.5em">
          {`${user?.firstName}  ${user?.lastName}`}
        </Typography>
      </DashImgContainer>
      <Container
        direction="column"
        align-items="flex-start"
        justify-content="space-between"
        margin-bottom="2em"
      >
        <NavLink href="#">My Orders</NavLink>
        <NavLink href="#">Wishlist</NavLink>
        <NavLink href="#">Notifications</NavLink>
        <NavLink href="#">Settings</NavLink>
      </Container>
      <Divider color="#707070" />
      <OutLink href="#" onClick={handleLoagout}>
        Logout
      </OutLink>
    </DashboardContainer>
  );
};

export default ProfileDashboard;
