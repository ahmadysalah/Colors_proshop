import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Container, Icon, Typography, FileInput } from '../../../components';
import { InputFile } from '../../../components/Form/checkBox/style';
import { ImagesContainer, WarperFile } from '../style';

const ProductImages = () => {
  return (
    <ImagesContainer
      direction="column"
      width="30%"
      max-width="25rem"
      margin="2em 0"
    >
      <WarperFile htmlFor="file-input">
        <Icon icon={<FaCloudUploadAlt color="#707070" />} size="7em" />
        <Typography variant="p" color="#707070" margin-top="1em">
          Product Images <small>(4 images allowed)</small>
        </Typography>
      </WarperFile>
      <InputFile id="file-input" />

      <Container justify-content="space-between" margin="1em 0">
        <FileInput name="secondImage" label="" />
        <FileInput name="thirdImage" label="" margin="0 0.5em" />
        <FileInput name="fourthImage" label="" />
      </Container>
    </ImagesContainer>
  );
};

export default ProductImages;
