import { getAllUsers } from "@/lib/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
    try {
        const { email, password } = await req.json()
        console.log(email, password)

        if (!email || !password) {
            return NextResponse.json(
                { success: false, error: "Email and password are required fields." },
                { status: 400 }
            );
        }

        const users = getAllUsers();

        const userHave = users.find(user => user.email === email && user.password === password);

        if (userHave) {
            return NextResponse.json({ success: true, user: userHave }, { status: 200 });
        } else {
            return NextResponse.json(
                { success: false, error: "User not found!" },
                { status: 400 }
            );
        }

    } catch (error) {
        return NextResponse.json({ success: false, error }.error, {
            status: 500
        })
    }
};
