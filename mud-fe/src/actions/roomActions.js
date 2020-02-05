import {
    GET_ROOMS_START,
     GET_ROOMS_SUCCESS ,
     GET_ROOMS_FAILURE,
     POSITION,
     PLAYERS,
     ERROR_MSG,
     DESCRIPTION,
     TITLE
    
    } from './types';

    import axiosWithAuth from '../utils/axiosWithAuth'
    
    
    
    
    export const title = (data) => {
        return {
            type: TITLE,
            payload: data
        }
    }
    
    export const description = (data) => {
        return {
            type: DESCRIPTION,
            payload: data
        }
    }
    
    export const players = (data) => {
        return {
            type: PLAYERS,
            payload: data
        }
    }
    
    export const error_msg = (data) => {
        return {
            type: ERROR_MSG,
            payload: data
        }
    }
    export const position = (data) => dispatch =>{
       dispatch({
           type:POSITION,
           payload:data
       })
       
    }
    
    
    
    export const getAllRooms = () => dispatch => {
       
        dispatch({ type: GET_ROOMS_START });
            return axiosWithAuth()
            .get(`http://multi-user-dungeon-lambda.herokuapp.com/api/adv/getallrooms`)
            .then(res => {
                console.log(res)
    
                dispatch({
                    type: GET_ROOMS_SUCCESS,
                    payload: res.data.UserName
                });
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: GET_ROOMS_FAILURE,
                    payload: err
                });
            });
    };