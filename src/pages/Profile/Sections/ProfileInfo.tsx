import React from 'react';
import { Button, Container, Typography, Image } from '../../../components';
import {
  InfoContainer,
  InfoBoxContainer,
  InfoDetailsContainer,
  ImageContainer,
  DataValue,
  SpanTitle,
} from '../style';

const ProfileInfo: React.FC = () => {
  return (
    <InfoContainer
      align-items="flex-start"
      flex-basis="50%"
      flex-wrap="wrap"
      height="528px"
      background="#F2F2F2"
      border-radius="16px"
      padding="2em"
    >
      <InfoBoxContainer direction="column" width="60%">
        <Typography variant="h2" fontSize="2rem" margin-bottom="2em">
          My Profile
        </Typography>
        <InfoDetailsContainer margin-bottom="2em">
          <Container
            direction="column"
            align-items="flex-start"
            justify-content="space-between"
            min-height="150px"
            max-width="50%"
          >
            <SpanTitle>First Name</SpanTitle>
            <SpanTitle>Last Name</SpanTitle>
            <SpanTitle>Email</SpanTitle>
            <SpanTitle>Birthday</SpanTitle>
          </Container>
          <Container
            direction="column"
            align-items="flex-start"
            justify-content="space-between"
            min-height="150px"
            max-width="60%"
          >
            <DataValue>Amy</DataValue>
            <DataValue>Mayer</DataValue>
            <DataValue>amymay@gmail.com</DataValue>
            <DataValue>12/04/1991</DataValue>
          </Container>
        </InfoDetailsContainer>
        <Button
          background="#FCDD06"
          fontSize="13px"
          style={{ marginBottom: '2em' }}
          padding="1em"
        >
          Change Password
        </Button>
      </InfoBoxContainer>
      <ImageContainer direction="column" width="40%">
        <Image
          src="https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?fakeurl=1&type=.jpg"
          width="12em"
          height="12em"
          variant="circle"
        />
        <Button
          background="#FCDD06"
          fontSize="13px"
          style={{ margin: '2em auto' }}
          padding="1em"
        >
          Upload new photo
        </Button>
      </ImageContainer>
    </InfoContainer>
  );
};

export default ProfileInfo;
