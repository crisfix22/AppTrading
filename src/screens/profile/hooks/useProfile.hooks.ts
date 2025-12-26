import { useState } from "react";
import { useUserContext } from "../../../global/state/user/userContext.context";
import { wait } from "../../../global/utils/utils";
import { BaseResponse } from "../../../global/api/interface/axios.interface";

export const useProfile = () => {
    const { user, clearUser } = useUserContext();
    const [loading, setLoading] = useState(false);
    const logout = async (): Promise<BaseResponse<boolean>> => {
        setLoading(true);
        await wait(1000);
        clearUser();
        return {
            code: '200',
            status: 'success',
            message: 'Logout successful',
            data: true,
        };
    };
    return {
        user,
        loading,
        logout,
    };
};