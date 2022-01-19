import React from 'react';
import { GlobalStyle, ProfileContainer } from './style';
import ProfileInfo from './Sections/ProfileInfo';
import ProfileDashboard from './Sections/ProfileDashboard';

const Profile = () => {
  return (
    <ProfileContainer
      align-items="flex-start"
      flex-wrap="wrap"
      padding="5em 0 5em 5em"
    >
      <GlobalStyle />
      <ProfileDashboard />
      <ProfileInfo />
    </ProfileContainer>
  );
};

export default Profile;
