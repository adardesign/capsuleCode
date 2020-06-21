import axios from 'axios';

import {
    CREATE_ROUTE_SUCCESS,
    READ_ROUTES,
    READ_ROUTES_SUCCESS,
    READ_ROUTES_FAIL,
    UPDATE_ROUTE_SUCCESS,
    DELETE_ROUTE_SUCCESS,
} from "./constants";

// CRUD action




// perhaps only have SUCCESS and leave the other states to local implimentation 

// by order of CRUD
console.log(process.env)
const baseRoute = `https://crudcrud.com/api/${process.env.REACT_APP_CRUD_ID}/routes/`

export function createRoute(data) {
    return function (dispatch, getState) {
        axios.post(baseRoute, data)
            .then(response => {
                dispatch({ type: CREATE_ROUTE_SUCCESS, payload: response.data })
            })
            .catch(error => console.log('error', error));
    }
}

export function readRoutes(id) {
    return function (dispatch, getState) {
        axios.get(baseRoute)
            .then(response => {
                dispatch({ type: READ_ROUTES_SUCCESS, payload: response.data })
            })
            .catch(error => console.log('error', error));
    }
}
export function readRoute(dispatch) {

}

export function updateRoute(data) {
    return function (dispatch, getState) {
        const { _id } = data;
        const sendData = { ...data }
        delete sendData._id
        axios.put(baseRoute + _id, sendData)
            .then(response => {
                dispatch({ type: UPDATE_ROUTE_SUCCESS, payload: response.data })
            })
            .catch(error => console.log('error', error));
    }

}

export function deleteRoute(id) {
    return function (dispatch, getState) {
        axios.delete(`${baseRoute}${id}`)
            .then(response => {
                dispatch({ type: DELETE_ROUTE_SUCCESS, payload: response.data })
                readRoutes()(dispatch);
            })
            .catch(error => console.log('error', error));
    }
}



