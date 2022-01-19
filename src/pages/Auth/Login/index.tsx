import { useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useFormik, FormikHelpers } from 'formik';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
  LoginText,
  LoginSubText,
  RightLogin,
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
    <Column>
      <InnerColSection>
        <Wrapper>
          <LeftLogin>
            <Column>
              <LoginText>Login.</LoginText>
              <LoginSubText>
                Login with your data that you entered during registration
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
                    name="email"
                    label="Enter your email address"
                    type="email"
                    placeholder="enter  email"
                    isRequired
                    errors={formik.errors?.email}
                    touched={formik.touched.email}
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
                    onBlur={formik.handleBlur}
                    touched={formik.touched.password}
                    onChange={formik.handleChange}
                    icon={<RiLockPasswordFill />}
                    value={formik.values.password}
                  />
                </Column>
                <ButtonLogin disabled={!formik.isValid} type="submit">
                  Login
                </ButtonLogin>
                <Column item="center">
                  <WrapperRemmber>
                    <CheckBox label="Remember me" name="Remember me" />
                  </WrapperRemmber>
                  <ForgotPassword>Forgot your password?</ForgotPassword>
                  <Divider thick="2px" width="100%" />
                  <Column
                    item="center"
                    JC="center"
                    style={{
                      alignItems: 'center',
                    }}
                  >
                    <ButtonSuginup onClick={() => navigate('/signup')}>
                      Sign up now
                    </ButtonSuginup>
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
export default Login;
