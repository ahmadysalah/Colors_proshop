/* eslint-disable import/extensions */
import { RiLockPasswordFill } from 'react-icons/ri';
import { useFormik, FormikHelpers } from 'formik';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { GrUserNew } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
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
import { AuthActions } from '../../../redux/Auth/action';
import { AppState } from '../../../redux/store';
import { TAllActionAuth } from '../../../redux/Auth/type';

const initialValues: ISchemaValidationSuginup = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, TAllActionAuth>>();

  const formik = useFormik<ISchemaValidationSuginup>({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      console.log('values', values);

      const firstName = values.name.split(' ')[0];
      const lastName = values.name.split(' ')[1];
      dispatch(
        AuthActions.singUpSuccess(
          {
            email: values.email,
            password: values.password,
            firstName,
            lastName,
            passwordConfirmation: values.passwordConfirmation,
          },
          () => {
            navigate('/');
          },
        ),
      );
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
              <form onSubmit={formik.handleSubmit}>
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
                    name="passwordConfirmation"
                    label="Confirm your password"
                    type="password"
                    placeholder="enter password"
                    isRequired
                    errors={formik.errors?.passwordConfirmation}
                    touched={formik.touched?.passwordConfirmation}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    icon={<RiLockPasswordFill />}
                    value={formik.values.passwordConfirmation}
                  />
                </Column>
                <ButtonLogin type="submit">Sign up</ButtonLogin>
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
