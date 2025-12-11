"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { PrimaryButton } from "./Button"
import { useRouter } from "next/navigation"

export function Appbar() {

    const session = useSession()
    const router = useRouter();

    return (
        <div className="border-b px-10 py-2 flex justify-between bg-[#05050a] text-white items-center">
            <div className="text-xl font-bold">
                DCEX
            </div>

            <div>
                {session.data?.user ? <PrimaryButton onClick={() => {
                    signOut()
                }}> Logout </PrimaryButton> : <PrimaryButton onClick={() => {
                    signIn("google", {callbackUrl: "/dashboard"})
                }}> SignIn </PrimaryButton>}
            </div>
        </div>
    )
}