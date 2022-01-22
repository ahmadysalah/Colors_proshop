import { Action } from 'redux';
import { IUser } from '../Auth/type';
import { EnumUserAction } from './constant';

export interface IUserProfile {
  _id: string;
  email: string;
  token: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  dateOfBirth: string;
  isAdmin: boolean;
  cart: ICart;
}
export interface ICart {
  items: Array<any>;
  totalQty: number;
  totalPrice: number;
}

export interface IStateUser {
  myProfile: {
    user?: IUser;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  updatedProfile: {
    user?: IUser;
    success?: boolean;
    isLoading: boolean;
    error?: string;
  };
}

export interface IUpdateCartStart extends Action<string> {
  type: EnumUserAction.UPDATE_PROFILE_CART_START;
}
export interface IUpdateCartSuccess extends Action<string> {
  type: EnumUserAction.UPDATE_PROFILE_CART_SUCCESS;
  payload: {
    cart: ICart;
  };
}
export interface IUpdateCartFilled extends Action<string> {
  type: EnumUserAction.UPDATE_PROFILE_CART_FILL;
  payload: {
    error: string;
  };
}

export interface IDelateCartStart extends Action<string> {
  type: EnumUserAction.DELETE_PROFILE_CART_START;
}
export interface IDelateCartSuccess extends Action<string> {
  type: EnumUserAction.DELETE_PROFILE_CART_SUCCESS;
  payload: {
    cart: ICart;
  };
}
export interface IDelateCartFilled extends Action<string> {
  type: EnumUserAction.DELETE_PROFILE_CART_FILL;
  payload: {
    error: string;
  };
}
/**
 * Top interface
 */

export type TAllActionCart =
  | IUpdateCartStart
  | IUpdateCartSuccess
  | IUpdateCartFilled
  | IDelateCartStart
  | IDelateCartSuccess
  | IDelateCartFilled;
