import { get_user_login_service } from '@/services/account-details';
import { appSlice } from '../../app/redux/app-slice';

export function getAllBranches(branches) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.setBranches(await branches));
  };
}

export function getAllRecipes(recipes) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.setRecipes(await recipes));
  };
}

export function getAllBread(breads) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.setBreads(await breads));
  };
}

export function get_user_login_thunk() {
  return async function (dispatch, getState) {
    const res = await get_user_login_service()
    dispatch(appSlice.actions.setUser(res));
    return res
  }
}