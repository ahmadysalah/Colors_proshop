import React from 'react';
import { Container, Divider, Image, Typography } from '../../../components';
import {
  DashboardContainer,
  DashImgContainer,
  NavLink,
  OutLink,
} from '../style';

const ProfileDashboard: React.FC = () => {
  return (
    <DashboardContainer
      direction="column"
      align-items="flex-start"
      flex-basis="30%"
      height="528px"
      background="#F2F2F2"
      border-radius="16px"
    >
      <DashImgContainer padding="1em">
        <Image
          src="https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?fakeurl=1&type=.jpg"
          width="137px"
          height="137px"
          variant="circle"
          border
          style={{ margin: '0' }}
        />
        <Typography variant="h2" fontSize="2rem" margin="0.5em 0 0 0.5em">
          Amy Mayer
        </Typography>
      </DashImgContainer>
      <Container
        direction="column"
        align-items="flex-start"
        justify-content="space-between"
        margin-bottom="1em"
        min-height="150px"
        padding="1em"
      >
        <NavLink to="#">My Orders</NavLink>
        <NavLink to="#">Wishlist</NavLink>
        <NavLink to="#">Notifications</NavLink>
        <NavLink to="#">Settings</NavLink>
      </Container>
      <Divider color="#707070" />
      <OutLink to="#">Logout</OutLink>
    </DashboardContainer>
  );
};

export default ProfileDashboard;
