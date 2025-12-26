import { createContext, useContext, useState} from "react";
import { User, UserContextInterface } from "./interface/userContext.interface";

export const UserContext = createContext<UserContextInterface>({
    user: {
        id: '',
        name: '',
        email: '',
        password: '',
    },
    setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>({
        id: '',
        name: '',
        email: '',
        password: '',
    });
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};   

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};