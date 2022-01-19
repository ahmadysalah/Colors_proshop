import { useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useFormik, FormikHelpers } from 'formik';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
  LoginText,
  LoginSubText,
  ImageShape,
  Wrapper,
  WrapperRemmber,
  ForgotPassword,
  ButtonSuginup,
  LeftLogin,
  ButtonLogin,
} from './style';
import {
  IschemaValidationLogin,
  schemaValidationLogin as validationSchema,
} from '../../../utils/helper/validation';
import LoginImage from '../../../assets/Images/login.png';
import { Column, InnerColSection } from '../../../components/Row';
import Divider from '../../../components/Divider';
import { CheckBox } from '../../../components/Form/checkBox';
import { InputController } from '../../../components/Form/inputController';
import { Container, Image } from '../../../components';

const initialValues: IschemaValidationLogin = {
  email: '',
  password: '',
  ischeckbox: false,
};

const Login = () => {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const navigate = useNavigate();

  const formik = useFormik<IschemaValidationLogin>({
    initialValues,
    validationSchema,
    onSubmit: (values, e: FormikHelpers<IschemaValidationLogin>) => {
      console.log(values);
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
              onSubmit={e => {
                e.preventDefault();
                formik.handleSubmit();
                formik.resetForm();
              }}
            >
              <Container width="100%" direction="column" padding={0}>
                <InputController
                  name="email"
                  label="Enter your email address"
                  type="email"
                  placeholder="Enter Email"
                  isRequired
                  errors={formik.errors?.email}
                  touched={formik.touched.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  icon={<AiOutlineMail />}
                  value={formik.values.email}
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

                <ButtonLogin disabled={!formik.isValid} type="submit">
                  Login
                </ButtonLogin>
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
            <Image src={LoginImage} alt="image login continer" size="xl" />
          </Container>
        </Wrapper>
      </InnerColSection>
    </Container>
  );
};
export default Login;