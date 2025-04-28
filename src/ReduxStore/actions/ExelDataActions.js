import { ActionTypes, SERVICES_BASE_URL } from "../contants";
import { getService, getByIdService, createService, deleteService } from "../services/service";

// get Exel Data Actions
const getDataAction = () => {
  return (Dispatch) => {
    Dispatch({ type: ActionTypes.GET_DATA_REQUEST, })
    getService(SERVICES_BASE_URL).then(
      (response) => {
        if (response) {
          return Dispatch({ type: ActionTypes.GET_DATA_LIST_SUCESS, data: response })
        }
        else { return Dispatch({ type: ActionTypes.GET_DATA_LIST_FAIL, data: response }) }
      },
      (error) => {
        return Dispatch({ type: ActionTypes.GET_DATA_LIST_FAIL, data: error })
      }
    )
  }
};

// get Exel Data Actions
const updateDataAction = (parms) => {
  return (Dispatch) => {
    Dispatch({ type: ActionTypes.UPDATE_DATA_REQUEST, })
    createService(SERVICES_BASE_URL, parms).then(
      (response) => {
        if (response) {
          return Dispatch({ type: ActionTypes.UPDATE_DATA_LIST_SUCESS, data: response })
        }
        else { return Dispatch({ type: ActionTypes.UPDATE_DATA_LIST_FAIL, data: response }) }
      },
      (error) => {
        return Dispatch({ type: ActionTypes.UPDATE_DATA_LIST_FAIL, data: error })
      }
    )
  }
};


export {
  getDataAction,
  updateDataAction
}