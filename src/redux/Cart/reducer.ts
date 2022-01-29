import { ICart } from '../User/type';
import { IUser } from '../Auth/type';
import { EnumCartAction } from './constant';
import { ActionCartType, ICartState } from './type';

const temp = localStorage.getItem('user');

const initialState: ICartState = {
  cart: temp
    ? (JSON.parse(temp) as IUser).cart
    : ({
        items: [],
        totalQty: 0,
        totalPrice: 0,
      } as ICart),
  success: false,
  isLoading: false,
  error: '',
};

export const CartReducer = (
  state = initialState,
  action: ActionCartType,
): ICartState => {
  switch (action.type) {
    case EnumCartAction.UPDATE_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };
    case EnumCartAction.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        cart: action.payload.cart,
      };

    case EnumCartAction.UPDATE_ITEM_FILL:
      return { ...state, error: action.payload.error };

    case EnumCartAction.MY_CART_START:
      return {
        ...state,
        isLoading: true,
      };
    case EnumCartAction.MY_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        cart: action.payload.cart,
      };

    case EnumCartAction.MY_CART_FILL:
      return { ...state, error: action.payload.error };

    case EnumCartAction.DELETE_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };
    /* eslint no-case-declarations: "error" */

    case EnumCartAction.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case EnumCartAction.DELETE_ITEM_FILL:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
