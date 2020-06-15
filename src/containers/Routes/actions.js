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
export function createRoute(dispatch) {

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

export function updateRoute(dispatch) {

}

export function deleteRoute(id) {
    return function (dispatch, getState) {
        axios.delete(`${baseRoute}${id}`)
            .then(response => {
                dispatch({ type: DELETE_ROUTE_SUCCESS, payload: response.data })
            }).then(()=>{
                readRoutes();
            })
            .catch(error => console.log('error', error));
    }
}



