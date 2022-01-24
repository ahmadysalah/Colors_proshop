import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Container, Icon, Typography, FileInput } from '../../../components';
import { InputFile } from '../../../components/Form/checkBox/style';
import { ImagesContainer, WarperFile } from '../style';

const ProductImages = ({ formik }: any) => {
  return (
    <ImagesContainer
      direction="column"
      width="30%"
      max-width="25rem"
      margin="2em 0"
    >
      <WarperFile htmlFor="file">
        <Icon icon={<FaCloudUploadAlt color="#707070" />} size="7em" />
        <Typography variant="p" color="#707070" margin-top="1em">
          Product Images <small>(4 images allowed)</small>
        </Typography>
      </WarperFile>
      <InputFile
        id="file"
        name="images[0]"
        onChange={(e: any) => {
          formik.setFieldValue('images[0]', e.currentTarget.files[0]);
        }}
      />

      <Container justify-content="space-between" margin="1em 0">
        <FileInput
          name="images[1]"
          label=""
          onChange={(e: any) => {
            formik.setFieldValue('images[1]', e.currentTarget.files[0]);
          }}
        />
        <FileInput
          name="images[2]"
          label=""
          margin="0 0.5em"
          onChange={(e: any) => {
            formik.setFieldValue('images[2]', e.currentTarget.files[0]);
          }}
        />
        <FileInput
          name="images[3]"
          label=""
          onChange={(e: any) => {
            formik.setFieldValue('images[3]', e.currentTarget.files[0]);
          }}
        />
      </Container>
    </ImagesContainer>
  );
};

export default ProductImages;
