import { getUser } from "@/lib/user";
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
    try {
        const id = req.url.split('user/')[1];
        const user = getUser(parseInt(id))
        return NextResponse.json({ success: true, user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, error }.error, {
            status: 500
        })
    }
}