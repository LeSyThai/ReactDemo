import axios from "axios"
import { Alert } from "react-native";
import { ADD_TODO_FAIL, ADD_TODO_SUCCESS, DELETE_TODO_FAIL, DELETE_TODO_SUCCESS, GET_TODOS_FAIL, GET_TODOS_SUCCESS, GET_TODO_BY_ID_FAIL, GET_TODO_BY_ID_SUCCESS, UPDATE_TODO_FAIL, UPDATE_TODO_SUCCESS } from "./types";

const baseURL = 'http://10.0.2.2:3000';

export const getTodosAction = (userid: any) => async(dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
        const response = await axios.get(`${baseURL}/todos?userid=${userid}`);
        if (response.status === 200) {
          dispatch({       
            type: GET_TODOS_SUCCESS,
            payload: response.data
          });
        }
      } catch (error) {
        console.error('Get todo list fail', error);
        dispatch ({
          type: GET_TODOS_FAIL,
          payload: error,
        })
      }
}

export const getTodoByIdAction = (id: any) => async(dispatch: (arg0: { type: string; payload: any; }) => void) => {
  try {
      const response = await axios.get(`${baseURL}/todos?id=${id}`);
      if (response.status === 200) {
        //console.log(response.data)
        dispatch({       
          type: GET_TODO_BY_ID_SUCCESS,
          payload: response.data
        });
      }
    } catch (error) {
      console.error('Get todo fail', error);
      dispatch ({
        type: GET_TODO_BY_ID_FAIL,
        payload: error,
      })
    }
}

export const addTodoAction = (userid: any, title: any, description: any) => async(dispatch: (arg0: { type: string; payload: any; }) => void) => {
  try {
      const response = await axios.post(`${baseURL}/todos`,{
        userid,
        title,
        description,
      });
    
      if (response.status === 201) {
        //console.log(description)
        Alert.alert('Add todo successfully')
        // console.log(response)
        
        dispatch({       
          type: ADD_TODO_SUCCESS,
          payload: response.data
        });
      }
      else{
        Alert.alert('Cannot add todo')
        // console.log(response)
        dispatch({
          type: ADD_TODO_FAIL,
          payload: 'Cannot add todo.'
        })
      }

    
    } catch (error) {
        console.error('Add todo failed', error);
            dispatch ({
            type: ADD_TODO_FAIL,
            payload: error,
            })
    }
}
export const updateTodoAction=(id: any, userid: any, title: any, description: any) => async(dispatch: (arg0: { type: string; payload?: any; }) => void)=>{
    try {
        const response= await axios.put(`${baseURL}/todos/${id}`, {
            userid,
            title,
            description
        })

        if(response.status === 200){
          Alert.alert("Update successfully!");

          dispatch({
            type: UPDATE_TODO_SUCCESS,
            payload: response.data
          })
        }
        else{
          Alert.alert('Cannot update todo')
          // console.log(response)
          dispatch({
            type: UPDATE_TODO_FAIL,
            payload: 'Cannot add todo.'
          })
        }
    } catch (error) {
      dispatch({
        type: UPDATE_TODO_FAIL,
        payload: error
      })
    }
}

export const deleteTodoAction=(id: any)=> async(dispatch: (arg0: { type: string; payload?: any; }) => void)=>{

  try {
    const response= await axios.delete(`${baseURL}/todos/${id}`);
    if( response.status === 200){
      dispatch({
        type: DELETE_TODO_SUCCESS,
        payload: id
      });
    }
  } catch (error) {
    //console.log('12334')
    dispatch({
      type: DELETE_TODO_FAIL,
      payload: error,
    })
  }
}
