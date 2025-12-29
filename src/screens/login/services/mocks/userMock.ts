import { User } from "../../../../global/state/user/interface/userContext.interface";

export const MOCK_USER: Array<User> = [
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