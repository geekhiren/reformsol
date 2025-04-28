
import { ActionTypes } from "../contants";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  isSucess: false,
};


const ExelDataReducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypes.GET_DATA_REQUEST:
      return {
        isLoading: true,
        data: null,
        error: null,
        isSucess: false,
      };
    case ActionTypes.GET_DATA_LIST_SUCESS:
      return {
        isLoading: false,
        data: action.data,
        error: null,
        isSucess: false,
      };

    case ActionTypes.GET_DATA_LIST_FAIL:
      return {
        isLoading: false,
        data: null,
        error: action.data,
        isSucess: false,
      };

    // Default
    default:
      return null;
  }
};


const DataUpdateReducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypes.UPDATE_DATA_REQUEST:
      return {
        isLoading: true,
        data: null,
        error: null,
        isSucess: false,
      };
    case ActionTypes.UPDATE_DATA_LIST_SUCESS:
      return {
        isLoading: false,
        data: action.data,
        error: null,
        isSucess: false,
      };

    case ActionTypes.UPDATE_DATA_LIST_FAIL:
      return {
        isLoading: false,
        data: null,
        error: action.data,
        isSucess: false,
      };

    // Default
    default:
      return null;
  }
};


export {
  ExelDataReducer,
  DataUpdateReducer,
}










