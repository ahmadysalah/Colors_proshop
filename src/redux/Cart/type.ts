import { Action } from 'redux';
import { IProducts } from '../Product/type';
import { EnumCartAction } from './constant';

interface ICart {
  items: IProducts[];
  totalQty: 0;
  totalPrice: 0;
}

export interface IUpdateCardStart extends Action<string> {
  type: EnumCartAction.UPDATE_ITEM_START;
}

export interface IUpdateCardSuccess extends Action<string> {
  type: EnumCartAction.UPDATE_ITEM_SUCCESS;
  payload: {
    cart: ICart;
  };
}
export interface IUpdateCardFill extends Action<string> {
  type: EnumCartAction.UPDATE_ITEM_FILL;
  payload: {
    error: string;
  };
}

/**
 *DeleteItem
 */
export interface IDeleteCardStart extends Action<string> {
  type: EnumCartAction.DELETE_ITEM_START;
}
export interface IDeleteCardSuccess extends Action<string> {
  type: EnumCartAction.DELETE_ITEM_SUCCESS;
  payload: {
    _id: string;
  };
}
export interface IDeleteCardFill extends Action<string> {
  type: EnumCartAction.DELETE_ITEM_FILL;
  payload: {
    error: string;
  };
}

export type ActionCartType =
  | IDeleteCardStart
  | IDeleteCardSuccess
  | IDeleteCardFill
  | IUpdateCardStart
  | IUpdateCardSuccess
  | IUpdateCardFill;

export interface ICartState {
  cart: ICart;
  success: boolean;
  isLoading: boolean;
  error: string;
}
