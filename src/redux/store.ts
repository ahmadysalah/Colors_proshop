/* eslint-disable import/no-extraneous-dependencies */
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ProductReducer } from './Product/reducer';

import { AuthReducer } from './Auth/reducer';
import { AdminReducer } from './Admin/reducer';
import { UserReducer } from './User/reducer';

const middleware = [thunk];

const reducers = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
  admin: AdminReducer,
  user: UserReducer,
});
const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export type AppDispatch = typeof Store.dispatch;
export type AppState = ReturnType<typeof reducers>;
(window as any).store = Store;
export default Store;
