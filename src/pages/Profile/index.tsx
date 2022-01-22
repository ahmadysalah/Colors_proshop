import React from 'react';
import { GlobalStyle, ProfileContainer } from './style';
import ProfileInfo from './Sections/ProfileInfo';
import ProfileDashboard from './Sections/ProfileDashboard';

const Profile = () => {
  // const dispatch = useDispatch();
  // const userDetails = useSelector((state) => state.userDetails)
  // const { user } = userDetails

  // useEffect(() => {
  //   if (!userLogin) {
  //     history.push('/login')
  //   } else {
  //     if (!user) {
  //       dispatch(getUserDetails('profile'))
  //   }
  // }, [dispatch])
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
