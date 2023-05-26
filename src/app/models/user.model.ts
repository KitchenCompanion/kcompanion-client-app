export interface UserLogin{ //export it so it can be used by all services
    // username: string
    email: string
    password: string
}

export interface LoginResponse{
    token: string
}

export interface UserSignup{
    email: string
    username: string
    password: string
    confirm_password: string
}

export interface SignupResponse{
        email: string
        username: string
}