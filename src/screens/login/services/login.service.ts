import axios from "axios";
import { User } from "../../../global/state/user/interface/userContext.interface";
import { BaseResponse } from "../../../global/api/interface/axios.interface";
import { useUserContext } from "../../../global/state/user/userContext.context";
import { MOCK_USER } from "./mocks/userMock";

export const login = async (email: string, password: string): Promise<BaseResponse<User | null>> => {
    try {
        const user = MOCK_USER.find(user => user.email === email && user.password === password);
        if (user) {
            return {
                code: '200',
                status: 'success',
                message: 'Login successful',
                data: user,
            };
        }
        return {
            code: '401',
            status: 'error',
            message: 'Invalid email or password',
            data: null,
        };
    } catch (error) {
        return {
            code: '500',
            status: 'error',
            message: 'Error al iniciar sesión',
            data: null,
        };
    }
}

export const logout = async (): Promise<BaseResponse<boolean>> => {
    const { clearUser } = useUserContext();
    clearUser();
    return {
        code: '200',
        status: 'success',
        message: 'Logout successful',
        data: true,
    };
}