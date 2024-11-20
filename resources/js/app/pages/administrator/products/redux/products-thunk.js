import { create_items_service, delete_item_product_service, delete_item_service, get_items_by_id_service, get_items_service, update_items_service } from '@/services/items-service';
import { create_product_service, delete_product_service, edit_product_service } from '../../../../../services/products-service';
import { appSlice } from '../../../../redux/app-slice';
import { productsSlice } from './products-slice';
import { change_status_service, create_receives_service, delete_receives_service, get_receives_service, pullout_item_service } from '@/services/receives-service';
import { get_warehouses_service } from '@/services/warehouses-service';
import { get_supplies_service, update_supplies_service } from '@/services/supplies-service';

export function getAllProductsThunk(products) {
  return async function (dispatch, getState) {
    dispatch(productsSlice.actions.setProducts((await products).data));
  };
}

export function create_items_thunk(data) {
  return async function (dispatch, getState) {
    const res = await create_items_service(data)
    return res
  };
}

export function delete_items_thunk(id) {
  return async function (dispatch, getState) {
    const res = await delete_item_service(id)
    return res
  };
}

export function delete_items_product_thunk(id) {
  return async function (dispatch, getState) {
    const res = await delete_item_product_service(id)
    return res
  };
}

export function update_items_thunk(data) {
  return async function (dispatch, getState) {
    const res = await update_items_service(data)
    return res
  };
}

export function update_supplies_thunk(data) {
  return async function (dispatch, getState) {
    const res = await update_supplies_service(data)
  };
}

export function get_items_thunk(products) {
  return async function (dispatch, getState) {
    const res = await get_items_service()
    dispatch(productsSlice.actions.setItems(res.status));
  };
}

export function get_items_by_id_thunk(item_id) {
  return async function (dispatch, getState) {
    const res = await get_items_by_id_service(item_id)
    dispatch(productsSlice.actions.setItem(res.status));
  };
}


export function create_receives_thunk(data) {
  return async function (dispatch, getState) {
    await create_receives_service(data)
  };
}

export function get_receives_thunk(products) {
  return async function (dispatch, getState) {
    const res = await get_receives_service()
    dispatch(productsSlice.actions.setReceives(res.status));
  };
}

export function get_warehouses_thunk(products) {
  return async function (dispatch, getState) {
    const res = await get_warehouses_service()
    dispatch(productsSlice.actions.setWarehouses(res.status));
  };
}

export function get_supplies_thunk(products) {
  return async function (dispatch, getState) {
    const res = await get_supplies_service()
    dispatch(productsSlice.actions.setSupplies(res.status));
  };
}


export function change_status_thunk(data) {
  return async function (dispatch, getState) {
    const res = await change_status_service(data)
  };
}

export function delete_receives_thunk(data) {
  return async function (dispatch, getState) {
    const res = await delete_receives_service(data)
  };
}

export function pullout_item_thunk(data) {
  return async function (dispatch, getState) {
    const res = await pullout_item_service(data)
  };
}


export function createProductThunk(branches) {
  return async function (dispatch, getState) {
    dispatch(productsSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await create_product_service(getState().products.productForm)
      // console.log('datass',result.data)
      dispatch(productsSlice.actions.setLoading(false));
      dispatch(productsSlice.actions.setProducts(result.data));
      dispatch(productsSlice.actions.setProductForm({}));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Created Success!'
      }));
    } catch (error) {
      dispatch(productsSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}

export function editProductThunk(branches) {
  return async function (dispatch, getState) {
    dispatch(productsSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await edit_product_service(getState().products.productForm)
      // console.log('datass',result.data)
      dispatch(productsSlice.actions.setLoading(false));
      dispatch(productsSlice.actions.setProductForm({}));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Updated Success!'
      }));
    } catch (error) {
      dispatch(productsSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}

export function deleteProductThunk(data) {
  return async function (dispatch, getState) {
    dispatch(productsSlice.actions.setLoading(true));
    dispatch(appSlice.actions.setToastStatus({
      status: 'loading',
      message: 'Loading...'
    }));

    try {
      const result = await delete_product_service(data)
      dispatch(productsSlice.actions.setLoading(false));
      dispatch(productsSlice.actions.setProducts(result.data));
      dispatch(appSlice.actions.setToastStatus({
        status: 'success',
        message: 'Deleted Success!'
      }));
    } catch (error) {
      dispatch(productsSlice.actions.setLoading(false));
      //  console.log('data', error.response.data.message)
      dispatch(appSlice.actions.setToastStatus({
        status: 'error',
        message: error.response.data.message
      }));

    }
  };
}