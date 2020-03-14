interface LoginStart {
    type: typeof LOGIN_START
}

interface RegisterStart {
    type: typeof REGISTER_START
    payload: UserInfo
}