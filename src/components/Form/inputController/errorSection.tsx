import { FormikErrors, FormikTouched } from 'formik';

import { BiErrorAlt } from 'react-icons/bi';
import { Typography } from '../..';
import { ErrorWrapper } from './style';

interface Props {
  touched?:
    | FormikTouched<any>
    | FormikTouched<string>
    | FormikTouched<number>
    | boolean;
  errors?: FormikErrors<Date | any> | string;
}

export const ErrorSection = ({ touched, errors }: Props) => {
  if (touched && errors) {
    return (
      <ErrorWrapper JC="space-between" item="center">
        <Typography variant="p" fontFamily="mulish" margin="8px 0px">
          {errors}
        </Typography>
        <BiErrorAlt />
      </ErrorWrapper>
    );
  }
  return <></>;
};
