import { ActionTypes, SERVICES_BASE_URL, BLOGS_BASE_URL } from "../contants";
import { getService, getByIdService, createService, deleteService } from "../services/service";

// get Exel Data Actions
const getServiceExelDataAction = () => {
  return (Dispatch) => {
    Dispatch({ type: ActionTypes.GET_SERIVCE_EXEL_DATA_REQUEST, })
    getService(SERVICES_BASE_URL).then(
      (response) => {
        if (response) {
          return Dispatch({ type: ActionTypes.GET_SERIVCE_EXEL_DATA_LIST_SUCESS, data: parseCSV(response) })
        }
        else { return Dispatch({ type: ActionTypes.GET_SERIVCE_EXEL_DATA_LIST_FAIL, data: response }) }
      },
      (error) => {
        return Dispatch({ type: ActionTypes.GET_SERIVCE_EXEL_DATA_LIST_FAIL, data: error })
      }
    )
  }
};

// get Exel Data Actions
const getBlogExelDataAction = () => {
  return (Dispatch) => {
    Dispatch({ type: ActionTypes.GET_BLOG_EXEL_DATA_REQUEST, })
    getService(BLOGS_BASE_URL).then(
      (response) => {
        if (response) {
          return Dispatch({ type: ActionTypes.GET_BLOG_EXEL_DATA_LIST_SUCESS, data: parseCSV(response) })
        }
        else { return Dispatch({ type: ActionTypes.GET_BLOG_EXEL_DATA_LIST_FAIL, data: response }) }
      },
      (error) => {
        return Dispatch({ type: ActionTypes.GET_BLOG_EXEL_DATA_LIST_FAIL, data: error })
      }
    )
  }
};


function parseCSV(csvText) {
  if (csvText) {
    const rows = csvText.split(/\r?\n/);        // Use a regular expression to split the CSV text into rows while handling '\r'
    const headers = rows[0].split('-newColumn-');        // Extract headers (assumes the first row is the header row)
    const data = [];        // Initialize an array to store the parsed data
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split('-newColumn-');          // Use the regular expression to split the row while handling '\r'
      // const rowData = rows[i];          // Use the regular expression to split the row while handling '\r'
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {

        rowObject[removeCommas(headers[j])] = removeCommas(rowData[j]);
      }
      data.push(rowObject);
    }
    return data;
  }
}

function removeCommas(str) {
  if (str) {
    return str.replace(/^,*,|,*$/g, '');
  }
}

export {
  getServiceExelDataAction,
  getBlogExelDataAction
}