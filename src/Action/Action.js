

export const GET_DATA_LIST           = 'get_data_list'
export const SET_DATA_LIST           = 'set_data_list'
export const MODAL_TYPE              = 'modal_type'
export const MODAL_INFO              = 'modal_info'
export const MODAL_TYPE_TEXT         = 'modal_type_text'
export const LOAD_DATA_LIST          = 'load_data_list'
export const DATA_VISIBLE            = 'data_visible'
export const LOGOUT                  = 'logout'

const URL_GetData = 'https://jsonplaceholder.typicode.com/users'

export const getDataList = () => {
    console.log("ACTION")
    return (dispatch) => {
        dispatch({ type: GET_DATA_LIST })
        const fetchConfig = {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer',
                'content-type': 'application/json',
            })
        }
        return fetch(URL_GetData(), fetchConfig).then((response) => {
            if (response.status == 401) {
                response.json().then((data) => {
                    if (data.error == 'invalid_token') {
                        alertLoading(dispatch)
                        invalidToken(dispatch)
                    }
                })
                alertLoading(dispatch)
            } else if (response.status != 200) {
                alertLoading(dispatch)
                setDataVisible(dispatch, true)
                setDataModalType(dispatch, 'error')
                setDataModalTypeText(dispatch, 'Oops!')
                setDataModalInfo(dispatch, 'There was an error during the operation, please try again.')
                setTimeout(() => {
                    setDataVisible(dispatch, false)
                }, 1500)
            } else {
                console.log("ACTION")
                console.log(response.json())
                return response.json()
            }
        }).then((responseJson) => {
            if (responseJson.resultCode == 0) {
                alertLoading(dispatch)
                setDataList(dispatch, responseJson.responseBody.sort())
            } else {
                alertLoading(dispatch)
                setDataVisible(dispatch, true)
                setDataModalType(dispatch, 'error')
                setDataModalTypeText(dispatch, 'Oops!')
                setDataModalInfo(dispatch, responseJson.errorMessage)
                setTimeout(() => {
                    setDataVisible(dispatch, false)
                }, 1500)
            }
        }).catch((error)=>{
            console.log("ACTION: Data Action - get")
            console.log(error)
        })
    }
}

export const setDataList = (dispatch, dataList) => {
    dispatch({ type: SET_DATA_LIST, dataList })
}

export const setDataModalType = (dispatch, dataModalType) => {
    dispatch({ type: MODAL_TYPE, dataModalType })
}

export const setDataModalTypeText = (dispatch, dataModalTypeText) => {
    dispatch({ type: MODAL_TYPE_TEXT, dataModalTypeText })
}

export const setDataModalInfo = (dispatch, dataModalInfo) => {
    dispatch({ type: MODAL_INFO, dataModalInfo })
}

export const setDataVisible = (dispatch, dataVisible) => {
    dispatch({ type: TRANSACTION_VISIBLE, dataVisible })
}

export const setDataDisable = (dataVisible) => {
    return (dispatch) => {
        dispatch({ type: TRANSACTION_VISIBLE, dataVisible })
    }
}

const alertLoading = (dispatch) => {
    dispatch({ type: LOAD_DATA_LIST, dataListLoad: false })
}

const invalidToken = (dispatch) => {
    dispatch({ type: LOGOUT })
}