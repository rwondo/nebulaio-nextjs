import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
    const session = await getServerSession();
    if (!session || !session.user) {
        redirect("/login")
    }
    return (
        <div> logged in {session.user.id} </div>
    )
}