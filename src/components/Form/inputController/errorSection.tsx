import { FormikErrors, FormikTouched } from 'formik';

import { BiErrorAlt } from 'react-icons/bi';
import { Typography } from '../..';
import { Row } from '../../Row';

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
      <Row JC="space-between" item="center">
        <Typography variant="p" fontFamily="mulish" className="text-xs">
          {errors}
        </Typography>
        <BiErrorAlt />
      </Row>
    );
  }
  return <></>;
};
