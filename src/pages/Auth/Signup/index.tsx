/* eslint-disable import/extensions */
import { RiLockPasswordFill } from 'react-icons/ri';
import { useFormik, FormikHelpers } from 'formik';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { GrUserNew } from 'react-icons/gr';
import {
  LoginText,
  LoginSubText,
  RightLogin,
  ImageShape,
  Wrapper,
  WrapperRemmber,
  ForgotPassword,
  ButtonSuginup,
  ButtonLogin,
  LeftLogin,
} from '../Login/style';
import {
  schemaValidationSignUp as validationSchema,
  ISchemaValidationSuginup,
} from '../../../utils/helper/validation';
import LoginImage from '../../../assets/Images/singup.png';

import {
  Column,
  InnerColSection,
  InputController,
  CheckBox,
  Divider,
} from '../../../components';

const initialValues: ISchemaValidationSuginup = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik<ISchemaValidationSuginup>({
    initialValues,
    validationSchema,
    onSubmit: (values, e: FormikHelpers<ISchemaValidationSuginup>) => {
      console.log(values);
    },
  });
  return (
    <Column>
      <InnerColSection>
        <Wrapper>
          <LeftLogin>
            <Column>
              <LoginText>Signup.</LoginText>
              <LoginSubText>
                Sign up and get exclusive offers from us
              </LoginSubText>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  formik.handleSubmit();
                  formik.resetForm();
                }}
              >
                <Column>
                  <InputController
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="your  Name"
                    isRequired
                    errors={formik.errors?.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    touched={formik.touched?.name}
                    icon={<GrUserNew />}
                    value={formik.values.name}
                  />
                </Column>
                <Column>
                  <InputController
                    name="email"
                    label="Enter your email address"
                    type="email"
                    placeholder="test@test.com"
                    isRequired
                    errors={formik.errors?.email}
                    touched={formik.touched?.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    icon={<AiOutlineMail />}
                    value={formik.values.email}
                  />
                </Column>
                <Column>
                  <InputController
                    name="password"
                    label="Enter your password"
                    type="password"
                    placeholder="enter password"
                    isRequired
                    errors={formik.errors?.password}
                    touched={formik.touched?.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    icon={<RiLockPasswordFill />}
                    value={formik.values.password}
                  />
                </Column>
                <Column>
                  <InputController
                    name="password"
                    label="Confirm your password"
                    type="password"
                    placeholder="enter password"
                    isRequired
                    errors={formik.errors?.password}
                    touched={formik.touched?.passwordConfirmation}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    icon={<RiLockPasswordFill />}
                    value={formik.values.password}
                  />
                </Column>
                <ButtonLogin disabled={!formik.isValid} type="submit">
                  Sign up
                </ButtonLogin>
                <Column item="center">
                  <Divider thick="2px" width="100%" margin="40px 0px" />
                  <Column item="center">
                    <ForgotPassword>Have an account ? Login</ForgotPassword>
                  </Column>
                </Column>
              </form>
            </Column>
          </LeftLogin>
          <RightLogin>
            <ImageShape src={LoginImage} alt="image login continer" />
          </RightLogin>
        </Wrapper>
      </InnerColSection>
    </Column>
  );
};
export default Signup;
