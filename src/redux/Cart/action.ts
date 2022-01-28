import { Dispatch } from 'redux';
import { ICart } from '../User/type';

import { AppState } from '../store';

import { ActionCartType } from './type';

import { EnumCartAction } from './constant';
import Api from '../../utils/Api/axios';

interface AddItemPayload {
  productId?: string;
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
      const oldNumber = getState().user.myProfile;
      // const oldNumber = getState();

      const response = await Api.update<AddItemPayload>(
        '/users/profile/cart',
        data,
      );

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

export const myActionCart = () => {
  return async (dispatch: Dispatch<ActionCartType>) => {
    dispatch({
      type: EnumCartAction.MY_CART_START,
    });

    try {
      const response = await Api.get(`/users/profile`);
      console.log('reee+++++', response.data.cart);
      dispatch({
        type: EnumCartAction.MY_CART_SUCCESS,
        payload: {
          cart: response.data.cart as ICart,
        },
      });
    } catch (e: any) {
      dispatch({
        type: EnumCartAction.MY_CART_FILL,
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
