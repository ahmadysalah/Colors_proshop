/* eslint-disable no-underscore-dangle */
import { Dispatch } from 'redux';
import { AppState } from '../store';
import { IProducts } from '../Product/type';

import { ActionCartType } from './type';
import { ICart } from '../User/type';
import { EnumCartAction } from './constant';
import Api from '../../utils/Api/axios';

interface AddItemPayload {
  productId: string;
  qty: number;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const upduteActionCart = (data: AddItemPayload, fun?: Function) => {
  return async (
    dispatch: Dispatch<ActionCartType>,
    getState: () => AppState,
  ) => {
    dispatch({
      type: EnumCartAction.UPDATE_ITEM_START,
    });

    try {
      const oldNumber = getState().cart.cart.items;
      //  console.log('oldNumber', oldNumber.find(x=>x.p));

      const response = await Api.update<AddItemPayload>(
        '/users/profile/cart',
        data,
      );
      console.log('res-----------', response.data);

      if (response.status === 200) {
        dispatch({
          type: EnumCartAction.UPDATE_ITEM_SUCCESS,
          payload: {
            cart: response.data,
          },
        });
      }
      fun?.();
    } catch (e: any) {
      dispatch({
        type: EnumCartAction.UPDATE_ITEM_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const deleteActionCart = (id: string) => {
  return async (dispatch: Dispatch<ActionCartType>) => {
    dispatch({
      type: EnumCartAction.DELETE_ITEM_START,
    });

    try {
      const response = await Api.delate(`/users/profile/cart`, {
        params: {
          productId: id,
        },
      });
      if (response.status === 200) {
        dispatch({
          type: EnumCartAction.DELETE_ITEM_SUCCESS,
          payload: {
            _id: id,
          },
        });
      }
    } catch (e: any) {
      dispatch({
        type: EnumCartAction.DELETE_ITEM_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const CartActions = {
  deleteActionCart,
  upduteActionCart,
};
