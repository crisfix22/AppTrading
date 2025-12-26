import axios from "axios";
import { User } from "../../../global/state/user/interface/userContext.interface";
import { BaseResponse } from "../../../global/api/interface/axios.interface";

const MOCK_USER: Array<User> = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: '123456',
    },
    {
        id: '2',
        name: 'Test User',
        email: 'test@test.com',
        password: '123456',
    },
];
export const loginService = async (email: string, password: string): Promise<BaseResponse<User | null>> => {
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