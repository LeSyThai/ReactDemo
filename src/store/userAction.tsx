import axios from "axios"
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SIGNUP_FAIL, SIGNUP_SUCCESS, DELETE_ACCOUNT_SUCCESS, DELETE_ACCOUNT_FAIL } from "./types"
import { Alert } from "react-native";

const baseURL = 'http://10.0.2.2:3000';

export const loginAction = (email: any, password: any) => async(dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
        const response = await axios.get(`${baseURL}/users?email=${email}&password=${password}`);
    
        if (response.data.length > 0) {
          // console.log(response)
          dispatch({       
            type: LOGIN_SUCCESS,
            payload: response.data
          });
        }
        else{
          console.error('Invalid email or password.')
          // console.log(response)
          dispatch({
            type: LOGIN_FAIL,
            payload: 'Invalid email or password.'
          })
        }
      } catch (error) {
        console.error('Login failed', error);
        dispatch ({
          type: LOGIN_FAIL,
          payload: error,
        })
      }
}

export const logoutAction = () => {
    return {
        type: LOGOUT,
        payload: false
    }
}

export const signupAction = (fName: any, lName: any, email: any, password: any) => async(dispatch: (arg0: { type: string; payload: any; }) => void) => {
  try {
    const check= await axios.get(`${baseURL}/users?email=${email}&password=${password}`);
    if(check.data.length == 0){
      const response = await axios.post(`${baseURL}/users`,{
        fName,
        lName,
        email,
        password
      });
    
      if (response.status === 201) {
        Alert.alert('Sign up successfully')
        // console.log(response)
        
        dispatch({       
          type: SIGNUP_SUCCESS,
          payload: response.data
        });
      }
      else{
        Alert.alert('Invalid email or password.')
        // console.log(response)
        dispatch({
          type: SIGNUP_FAIL,
          payload: 'Invalid email or password.'
        })
      }
    }
    else{
      Alert.alert('Account has aleady exist');
      dispatch({
        type: SIGNUP_FAIL,
        payload: 'Account has aleady exist.'
      })
    }

    
  } catch (error) {
    console.error('Signup failed', error);
        dispatch ({
          type: SIGNUP_FAIL,
          payload: error,
        })
  }
}
export const deleteAccountAction=(userId: any)=> async(dispatch: (arg0: { type: string; payload?: any; }) => void)=>{

  try {
    const response= await axios.delete(`${baseURL}/users/${userId}`);
    if( response.status === 200){
      dispatch({
        type: DELETE_ACCOUNT_SUCCESS,
      });
    }
  } catch (error) {
    console.log('12334')
    dispatch({
      type: DELETE_ACCOUNT_FAIL,
      payload: error,
    })
  }
}