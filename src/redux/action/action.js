import axios from 'axios';
import * as types from '../types/type';

const add_data = () => {
    return{
        type:types.ADD_DATA
    }
}
export const pre_add_data = (add) => {
    return(dispatch) => {
        axios.post('/api/students/',add)
        .then(res => {
            dispatch(add_data())
        })
        .catch(err => console.log(err))
    }
}

const get_data = (data) => {
    return{
        type:types.GET_DATA,
        payload:data
    }
}
export const pre_get_data = () => {
    return(dispatch) => {
        axios.get('/api/students/')
        .then(res => {
            dispatch(get_data(res.data.students))
        })
        .catch(err => console.log(err))
    }
}


const delete_data = () => {
    return{
        type:types.DELETE_DATA
    }
}
export const pre_delete_data = (id) => {
    return dispatch => {
        axios.delete(`/api/students/${id}`)
        .then(res => {
            dispatch(delete_data())
            // dispatch(get_data())
        })
        .catch(err => console.log(err))
    }
}


const single_state = (data) => {
    return {
        type:types.EDIT_SINGLE_STATE,
        payload:data
    }
}
export const pre_single_state = (id) => {
    return dispatch => {
        axios.get(`/api/students/${id}`)
        .then ( res => {
            dispatch(single_state(res.data.student))
        })
        .catch(err => console.log(err))
    }
}


const edit_update = () => {
    return {
        type:types.EDIT_UPDATE
    }
}
export const pre_edit_update = (id,edit) => {
    return dispatch => {
        axios.put(`/api/students/${id}`,edit)
        .then(res => {
            dispatch(edit_update())
        })
        .catch(err => console.log(err))
    }
}