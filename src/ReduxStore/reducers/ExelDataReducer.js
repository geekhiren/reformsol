
import { ActionTypes } from "../contants";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  isSucess: false,
};

const BlogExelDataReducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypes.GET_BLOG_EXEL_DATA_REQUEST:
      return {
        isLoading: true,
        data: null,
        error: null,
        isSucess: false,
      };
    case ActionTypes.GET_BLOG_EXEL_DATA_LIST_SUCESS:
      return {
        isLoading: false,
        data: action.data,
        error: null,
        isSucess: false,
      };

    case ActionTypes.GET_BLOG_EXEL_DATA_LIST_FAIL:
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
const ServiceExelDataReducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypes.GET_SERIVCE_EXEL_DATA_REQUEST:
      return {
        isLoading: true,
        data: null,
        error: null,
        isSucess: false,
      };
    case ActionTypes.GET_SERIVCE_EXEL_DATA_LIST_SUCESS:
      console.log('action.data',action.data)
      return {
        isLoading: false,
        data: action.data,
        error: null,
        isSucess: false,
      };

    case ActionTypes.GET_SERIVCE_EXEL_DATA_LIST_FAIL:
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
  BlogExelDataReducer,
  ServiceExelDataReducer
}










