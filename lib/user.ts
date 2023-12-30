export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    nid: string;
    dob: string;
    password: string;
    role: string;
}

let users: User[] = [
    {
        id: 1,
        firstName: "Jahangir",
        lastName: "Alom",
        email: "admin@gmail.com",
        mobile: "01773939393",
        nid: "1122333344",
        dob: "2023-12-02",
        password: "@Test123",
        role: "admin"
    },
    {
        id: 2,
        firstName: "Md Din",
        lastName: "Islam",
        email: "hr@gmail.com",
        mobile: "01773939393",
        nid: "1122333344",
        dob: "2023-12-02",
        password: "@Test123",
        role: "hr"
    },
    {
        id: 3,
        firstName: "Md Shakil",
        lastName: "Ahmed",
        email: "customer@gmail.com",
        mobile: "01773939393",
        nid: "1122333344",
        dob: "2023-12-02",
        password: "@Test123",
        role: "customer"
    }
]
export const getUser = (id: number) => {
    const user = users.find(user => user.id === id);
    return user;
};

export const createUser = (user: User) => {
    users.push(user)
    return users;
}

export const getAllUsers = () => {
    return users;
}