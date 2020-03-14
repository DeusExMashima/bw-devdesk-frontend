export const LOGIN_START= "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

export const postLogin = (payload) => async (dispatch) => {
    dispatch({ type: LOGIN_START })

    try {
        const res = await axiosWithAuth().post("auth/login", payload)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    }
    
    catch(err){
        dispatch({ type: LOGIN_FAIL, payload: err })
    }
}