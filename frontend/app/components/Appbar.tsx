"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { PrimaryButton } from "./Button"
import { useRouter } from "next/navigation"
import { ChartBarIcon } from "lucide-react"

export function Appbar() {

    const session = useSession()
    const router = useRouter();

    return (
        <div className="border-b px-10 py-2 flex justify-between bg-[#05050a] text-white items-center">
            <div className="text-xl flex gap-10">
                <a href="#" className="font-extrabold" >
                    DCEX
                </a>
                <a className="flex items-center gap-3 font-bold text-blue-300  text-xl drop-shadow-[0_0_5px_#5294ff] drop-shadow-[0_0_10px_#5294ff]drop-shadow-[0_0_20px_#5294ff] hover:cursor-pointer">
                    Dashboard
                </a>
                <a className="flex items-center gap-3 hover:text-white font-bold hover:cursor-pointer">
                    <ChartBarIcon className="w-6" /> Markets
                </a>
                <a className="flex items-center gap-3 hover:text-white font-bold hover:cursor-pointer">
                    Settings
                </a>

            </div>

            <div>
                {session.data?.user ? <PrimaryButton onClick={() => {
                    signOut()
                }}> Logout </PrimaryButton> : <PrimaryButton onClick={() => {
                    signIn("google", { callbackUrl: "/dashboard" })
                }}> SignIn </PrimaryButton>}
            </div>
        </div>
    )
}