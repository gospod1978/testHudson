

export const GET_DATA_LIST           = 'get_data_list'
export const SET_DATA_LIST           = 'set_data_list'
export const LOAD_DATA_LIST          = 'load_data_list'
export const DATA_VISIBLE            = 'data_visible'
export const LOGOUT                  = 'logout'

const URL_GetData = 'https://jsonplaceholder.typicode.com/users'

export const getDataList = () => {
    return (dispatch) => {
        dispatch({ type: GET_DATA_LIST })
        const fetchConfig = {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer',
                'content-type': 'application/json',
            })
        }
        return fetch(URL_GetData).then((response) => {
            console.log(response);
            return response.json()
        }).then((data) => {
            console.log("ActionData")
            console.log(data);
            alertLoading(dispatch)
            setDataList(dispatch, data)
        }).catch(error => console.log(error));
    }
}

export const setDataList = (dispatch, dataList) => {
    dispatch({ type: SET_DATA_LIST, dataList })
}

export const setDataVisible = (dispatch, dataVisible) => {
    dispatch({ type: DATA_VISIBLE, dataVisible })
}

export const setDataDisable = (dataVisible) => {
    return (dispatch) => {
        dispatch({ type: DATA_VISIBLE, dataVisible })
    }
}

const alertLoading = (dispatch) => {
    dispatch({ type: LOAD_DATA_LIST, dataListLoad: false })
}

const invalidToken = (dispatch) => {
    dispatch({ type: LOGOUT })
}