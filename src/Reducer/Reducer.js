import { GET_DATA_LIST, DATA_VISIBLE, LOAD_DATA_LIST, SET_DATA_LIST } from '../Action/Action'

export const MODAL_TYPE              = 'modal_type'
export const MODAL_INFO              = 'modal_info'
export const MODAL_TYPE_TEXT         = 'modal_type_text'

const INITIAL_STATE = {
    dataModalType: '',
    dataModalTypeText: '',
    dataModalInfo: '',
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
        case MODAL_TYPE:
            return { ...state, dataModalType: action.dataModalType }
        case MODAL_TYPE_TEXT:
            return { ...state, dataModalTypeText: action.dataModalTypeText }
        case MODAL_INFO:
            return { ...state, dataModalInfo: action.dataModalInfo }
        case DATA_VISIBLE:
            return { ...state, dataVisible: action.dataVisible }
        case LOAD_DATA_LIST:
            return { ...state, dataListLoad: action.dataListLoad }
        default:
            return state
    }
}