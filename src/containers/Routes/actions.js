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
    return async function (dispatch, getState) {
        try {
            const response = await axios.post(baseRoute, data);
            dispatch({ type: CREATE_ROUTE_SUCCESS, payload: response.data });
            return response;
        }
        catch (error) {
            return console.log('error', error);
        }
    }
}

export function readRoutes(id) {
    return async function (dispatch, getState) {
        try {
            const response = await axios.get(baseRoute);
            dispatch({ type: READ_ROUTES_SUCCESS, payload: response.data });
            return response;
        }
        catch (error) {
            return console.log('error', error);
        }
    }
}
export function readRoute(dispatch) {

}

export function updateRoute(data) {
    return async function (dispatch, getState) {
        const { _id } = data;
        const sendData = { ...data }
        delete sendData._id
        try {
            const response = await axios.put(baseRoute + _id, sendData);
            dispatch({ type: UPDATE_ROUTE_SUCCESS, payload: response.data });
            return response;
        }
        catch (error) {
            return console.log('error', error);
        }
    }

}

export function deleteRoute(id) {
    return async function (dispatch, getState) {
        try {
            const response = await axios.delete(`${baseRoute}${id}`);
            dispatch({ type: DELETE_ROUTE_SUCCESS, payload: response.data });
            readRoutes()(dispatch);
            return response;
        }
        catch (error) {
            return console.log('error', error);
        }
    }
}



