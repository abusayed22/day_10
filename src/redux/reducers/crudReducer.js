import * as types from '../types/type';


const initialState = {
    users:[],
    user:{}
}
const crudReducer = (state=initialState,action) => {
    switch (action.type) {

        case types.ADD_DATA:
            return {
                ...state
            }
            break;

        case types.GET_DATA:
            return {
                ...state,
                users:action.payload
            }
            break;

        case types.DELETE_DATA:
            return {
                ...state
            }
            break;

        case types.EDIT_SINGLE_STATE:
            return {
                ...state,
                user:action.payload
            }
            break;

        case types.EDIT_UPDATE:
            return {
                ...state
            }
            break;
    
        default:
            return state
            break;
    }
}
export default crudReducer;