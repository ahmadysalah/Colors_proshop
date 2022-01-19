import React from 'react';
import { Button, Container, Typography, Image } from '../../../components';
import {
  DataValue,
  SpanTitle,
  InfoContainer,
  ImageContainer,
  DetailsContainer,
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
      margin-left="1em"
    >
      <DetailsContainer direction="column" width="60%" margin="0" padding="0">
        <Typography variant="h2" margin="0 0 2em 0">
          My Profile
        </Typography>
        <Container
          justify-content="space-between"
          margin-left="0"
          margin-bottom="2em"
          padding="0"
        >
          <Container
            direction="column"
            align-items="flex-start"
            justify-content="space-between"
            // width="50%"
            margin="0"
            margin-left="0"
            padding="0"
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
            // width="50%"
            margin="0"
            margin-left="0"
            padding="0"
          >
            <DataValue>Amy</DataValue>
            <DataValue>Mayer</DataValue>
            <DataValue>amymay@gmail.com</DataValue>
            <DataValue>12/04/1991</DataValue>
          </Container>
        </Container>
        <Button
          background="#FCDD06"
          fontSize="13px"
          style={{ margin: '0 0 2em 0' }}
          padding="1em"
        >
          Change Password
        </Button>
      </DetailsContainer>
      <ImageContainer direction="column" width="35%" padding="0">
        <Image
          src="https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?fakeurl=1&type=.jpg"
          width="198px"
          height="198px"
          style={{ borderRadius: '50%', marginBottom: '2em' }}
        />
        <Button
          background="#FCDD06"
          fontSize="13px"
          style={{ margin: '0 auto' }}
          padding="1em"
        >
          Upload new photo
        </Button>
      </ImageContainer>
    </InfoContainer>
  );
};

export default ProfileInfo;
