/* eslint-disable no-underscore-dangle */
import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { AppState } from '../store';
import Api from '../../utils/Api/axios';
import { EnumAdminAction } from './constant';
import { ICreateProduct, IProducts, TAllActionAdmin } from './type';
import { formDataCstom } from '../../utils/helper/formData';

//  ?keyword=iphone&pageNumber=1
export const getAllUser = (pageNumber?: number) => {
  return async (dispatch: Dispatch<TAllActionAdmin>) => {
    dispatch({
      type: EnumAdminAction.GET_ALL_USER_START,
    });
    let search = '';
    if (pageNumber) {
      search = `?pageNumber=${pageNumber}`;
    }

    try {
      const response = await Api.get(`/users${search}`);
      if (response.status === 200) {
        dispatch({
          type: EnumAdminAction.GET_ALL_USER_SUCCESS,
          payload: {
            user: response.data,
          },
        });
      } else {
        console.log('response', response.data.error);
      }
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.GET_ALL_USER_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const getUserById = (id: string) => {
  return async (dispatch: Dispatch<TAllActionAdmin>) => {
    dispatch({
      type: EnumAdminAction.GET_USER_BY_ID_START,
    });

    try {
      const response = await Api.get(`/users/${id}`);
      if (response.status === 200) {
        dispatch({
          type: EnumAdminAction.GET_USER_BY_ID_SUCCESS,
          payload: {
            user: response.data,
          },
        });
      } else {
        throw new Error('some  error habbend  in the Top  reated  peoduct');
      }

      //   history.push('/profile');
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.GET_USER_BY_ID_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const deleteUserById = (id: string) => {
  return async (dispatch: Dispatch<TAllActionAdmin>) => {
    dispatch({
      type: EnumAdminAction.DELETE_USER_START_START,
    });

    try {
      const response = await Api.delate(`/users/${id}`);
      if (response.status === 200) {
        dispatch({
          type: EnumAdminAction.DELETE_USER_START_SUCCESS,
          payload: {
            user: response.data,
          },
        });
      } else {
        throw new Error('some  error habbend  in the Top  reated  peoduct');
      }

      //   history.push('/profile');
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.DELETE_USER_START_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const addProduct = (product: ICreateProduct) => {
  return async (
    dispatch: Dispatch<TAllActionAdmin>,
    getState: () => AppState,
  ) => {
    dispatch({
      type: EnumAdminAction.CREATE_PRODUCTS_START,
    });

    // will  be  uplude  image  4 will  return  promise  it  call  api
    console.log('test lemmmee enter');

    const getImageURL = async (file: File): Promise<string> => {
      const { data } = await Api.post('/upload', formDataCstom(file));
      return data as string;
    };
    const imageUpload = product.images.map(image => {
      return getImageURL(image);
    });

    console.log('test lemmmee enter 2222', imageUpload);

    // just  add  the  roduct  and  link  with  user  id
    // imageUpload as unknown as Array<string>/
    console.log('product', product.categories);
    const data = {
      ...product,
      images: ['1', '2'], // urlImages.map(urlImage => urlImage.data),
      user: getState().auth.user._id,
      colors: ['black'],
    } as IProducts & {
      _id: string;
    };

    try {
      const response = await Api.post<IProducts>('/products', data);
      if (response.status === 201) {
        console.log('response', response);
        dispatch({
          type: EnumAdminAction.DELETE_USER_START_SUCCESS,
          payload: {
            user: response.data,
          },
        });
      } else {
        throw new Error('some  error habbend  in the Top  reated  peoduct');
      }

      //   history.push('/profile');
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.DELETE_USER_START_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};
export const delateProduct = (id: string) => {
  return async (
    dispatch: Dispatch<TAllActionAdmin>,
    getState: () => AppState,
  ) => {
    dispatch({
      type: EnumAdminAction.DELETE_PRODUCTS_START,
    });

    try {
      const response = await Api.delate(`/products/${id}`);
      if (response.status === 200) {
        dispatch({
          type: EnumAdminAction.DELETE_PRODUCTS_SUCCESS,
          payload: {
            product: response.data,
          },
        });
      } else if (response.status === 404) {
        dispatch({
          type: EnumAdminAction.DELETE_PRODUCTS_FILL,
          payload: {
            error: 'item  not  found ',
          },
        });
      }
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.DELETE_USER_START_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};
