import { createUser, getAllUsers } from "@/lib/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, mobile, nid, dob, password } = await req.json()
        const users = getAllUsers();
        const newUser = { id: users.length + 1, firstName, lastName, email, mobile, nid, dob, password, role: "customer" }
        createUser(newUser)
        return NextResponse.json({ success: true, user: newUser }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ success: false, error }.error, {
            status: 500
        })
    }
};
