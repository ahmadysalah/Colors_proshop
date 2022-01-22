import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AllRouter } from './AllRouter';
import ErrorBoundary from './components/ErrorBoundary';
import { SpinnerContainer } from './components/SpinnerContainer';
import DashBoard from './pages/DashBoard';
import { Providers } from './providers';
import { AuthActions } from './redux/Auth/action';
import { TAllActionAuth, TLogin } from './redux/Auth/type';
import {
  addReview,
  getAlCategory,
  getCategoryByName,
  getProductById,
  getProducts,
  getTopProducts,
} from './redux/Product/action';
import { TAllActionProduct } from './redux/Product/type';
import { AppState } from './redux/store';
import {
  delateProduct,
  deleteUserById,
  getAllUser,
  getUserById,
} from './redux/Admin/action';
import { getProfile, updateUser } from './redux/User/action';

const App: React.FC = () => {
  // const dispatch = useDispatch<ThunkDispatch<AppState, any, TAllActionAuth>>();
  // const dispatch =
  //   useDispatch<ThunkDispatch<AppState, any, TAllActionProduct>>();

  // useEffect(() => {
  //   dispatch(
  //     AuthActions.singUpSuccess({
  //       email: 'john@exampccle1xx2227.com',
  //       password: '123456PAs@',
  //       firstName: 'Mohammed ',
  //       lastName: 'alre',
  //       passwordConfirmation: '123456PAs@',
  //     }),
  //   );
  // }, []);

  // const navigation = useNavigate();
  // useEffect(() => {
  //   // dispatch(
  //   //   AuthActions.loginAction(
  //   //     {
  //   //       email: 'admin3@example.com',
  //   //       password: '123456PAs@',
  //   //     },
  //   //     () => navigation('/me'),
  //   //   ),
  //   // );
  //   dispatch(getAllUser());
  //   dispatch(getProfile());
  //   // dispatch(
  //   //   updateUser({
  //   //     firstName: 'Mohammed',
  //   //     lastName: 'alreai22',
  //   //     email: 'admin3@example.com',
  //   //     password: '123456PAs@',
  //   //     profileImage: new File('d', 'me'),
  //   //     isAdmin: true,
  //   //     dateOfBirth: '2022-01-19T15:33:19.719Z',
  //   //   }),
  //   // );

  //   // dispatch(delateProduct('61e82f47167ef207d4cb42a5'));

  //   // dispatch(getUserById('61e85bb5f896f300049ed1f7'));
  //   // dispatch(deleteUserById('61e85bb5f896f300049ed1f7'));
  //   // dispatch(getProducts('iphone'));
  //   // dispatch(getProducts('undefined',1));
  //   dispatch(getTopProducts());
  //   // dispatch(getAlCategory());
  //   // dispatch(getCategoryByName('Electronics'));
  //   // dispatch(getProductById('61e82f47167ef207d4cb42a5'));
  //   // dispatch(
  //   //   addReview('61e82f47167ef207d4cb42a5', {
  //   //     comment: 'some  ting',
  //   //     rating: 3,
  //   //   }),
  //   // );
  // }, []);
  return (
    <Providers>
      <Suspense fallback={<SpinnerContainer />}>
        <ErrorBoundary>
          <AllRouter />
        </ErrorBoundary>
      </Suspense>
    </Providers>
  );
};

export default App;
