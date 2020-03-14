import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const LOGIN_START: string = "LOGIN_START"
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS"
export const LOGIN_FAIL: string = "LOGIN_FAIL"

export const postLogin = (payload: LoginInfo) => async (dispatch: any) => {
    dispatch({ type: LOGIN_START })

    try {
        const res = await axiosWithAuth().post("api/auth/login", payload)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    }
    
    catch(err){
        dispatch({ type: LOGIN_FAIL, payload: err })
    }
}