export interface UserContextInterface {
    user: User;
    setUser: (user: User) => void;
}
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}