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
      margin="0 0 2em 0"
      padding="0"
    >
      <DashImgContainer>
        <Image
          src="https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?fakeurl=1&type=.jpg"
          width="137px"
          height="137px"
          style={{ borderRadius: '50%' }}
        />
        <Typography variant="h2" margin="0.5em 0 0 0.5em">
          Amy Mayer
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
      <OutLink href="#">Logout</OutLink>
    </DashboardContainer>
  );
};

export default ProfileDashboard;
