import { useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useFormik, FormikHelpers } from 'formik';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  LoginText,
  LoginSubText,
  Wrapper,
  ForgotPassword,
  ButtonSuginup,
  ButtonLogin,
} from './style';
import {
  IschemaValidationLogin,
  schemaValidationLogin as validationSchema,
} from '../../../utils/helper/validation';
import LoginImage from '../../../assets/Images/login.png';
import { InnerColSection } from '../../../components/Row';
import Divider from '../../../components/Divider';
import { CheckBox } from '../../../components/Form/checkBox';
import { InputController } from '../../../components/Form/inputController';
import { Container, Image } from '../../../components';
import { AppState } from '../../../redux/store';
import { TAllActionAuth } from '../../../redux/Auth/type';
import { AuthActions } from '../../../redux/Auth/action';

const Login = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const initialValues = {
    email: '',
    password: '',
    ischeckbox: false,
  };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };
  const navigate = useNavigate();

  const dispatch = useDispatch<ThunkDispatch<AppState, any, TAllActionAuth>>();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      console.log('values', values);
      dispatch(
        AuthActions.loginAction(
          {
            email: values.email,
            password: values.password,
          },
          () => {
            navigate('/');
          },
        ),
      );
    },
  });
  return (
    <Container
      height="100vh"
      padding={0}
      overflow="hidden"
      width="90%"
      margin="0 auto"
    >
      <InnerColSection>
        <Wrapper>
          <Container direction="column">
            <LoginText>Login.</LoginText>
            <LoginSubText>
              Login with your data that you entered during registration
            </LoginSubText>
            <form
              style={{
                width: '300px',
              }}
              onSubmit={formik.handleSubmit}
            >
              <Container width="100%" direction="column" padding={0}>
                <InputController
                  name="email"
                  label="Enter your email address"
                  type="email"
                  placeholder="Enter Email"
                  isRequired
                  value={formik.values.email}
                  errors={formik.errors?.email}
                  touched={formik.touched.email}
                  onBlur={formik.handleBlur('email')}
                  onChange={e => formik.setFieldValue('email', e.target.value)}
                  icon={<AiOutlineMail />}
                />

                <InputController
                  name="password"
                  label="Enter your password"
                  type="password"
                  placeholder="Enter Password"
                  isRequired
                  errors={formik.errors?.password}
                  onBlur={formik.handleBlur}
                  touched={formik.touched.password}
                  onChange={formik.handleChange}
                  icon={<RiLockPasswordFill />}
                  value={formik.values.password}
                />

                <ButtonLogin type="submit">Login</ButtonLogin>
                <CheckBox label="Remember me" name="Remember me" />
                <ForgotPassword>Forgot your password?</ForgotPassword>
                <Divider thick="2px" width="100%" />
                <ButtonSuginup onClick={() => navigate('/signup')}>
                  Sign up now
                </ButtonSuginup>
              </Container>
            </form>
          </Container>
          <Container>
            <Image
              src={LoginImage}
              alt="image login continer"
              size="xl"
              responsive
            />
          </Container>
        </Wrapper>
      </InnerColSection>
    </Container>
  );
};
export default Login;
