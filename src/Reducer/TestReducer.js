import { GET_DATA_LIST, DATA_VISIBLE, LOAD_DATA_LIST, SET_DATA_LIST } from '../Action/Action'

const INITIAL_STATE = {
    dataVisible: false,
    dataList: [],
    dataListLoad: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DATA_LIST:
            return { ...state, dataListLoad: true }
        case SET_DATA_LIST:
            return { ...state, dataList: action.dataList }
        case DATA_VISIBLE:
            return { ...state, dataVisible: action.dataVisible }
        case LOAD_DATA_LIST:
            return { ...state, dataListLoad: action.dataListLoad }
        default:
            return state
    }
}