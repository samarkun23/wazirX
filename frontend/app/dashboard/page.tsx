import DashboardUi from "@/components/ui/DashboardUi";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import db from "@/app/db"

async function getUserWallet() {
    const session = await getServerSession(authConfig); 

    const userWallet = await db.solWallet.findFirst({
        where:{
            userId: session?.user.uid
        },
        select:{
            publicKey: true
        }
    })

    if (!userWallet) {
        return{
            error: "No solana wallet"
        } 
    }

    return {error: null , userWallet};

}


export default async function Dashboard() {
    const userWallet = await getUserWallet();

    if (userWallet.error || !userWallet.userWallet?.publicKey) {
        return <>No Solana wallet found</> 
    }
    return (
        <DashboardUi publicKey={userWallet.userWallet?.publicKey}/>

    )
    
}