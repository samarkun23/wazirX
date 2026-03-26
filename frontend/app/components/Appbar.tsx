"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { PrimaryButton } from "./Button"
import { useRouter } from "next/navigation"
import { ChartBarIcon, TrendingUp } from "lucide-react"

export function Appbar() {

    const session = useSession()
    const router = useRouter();

    console.log("HY THERE IT IS " , session)

    return (
        // <div className="border-b px-10 py-2 flex justify-between bg-[#05050a] text-white items-center">
        //     <div className="text-xl flex gap-10">
        //         <a href="#" className="font-extrabold" >
        //             DCEX
        //         </a>
        //         <a className="flex items-center gap-3 font-bold text-blue-300  text-xl drop-shadow-[0_0_5px_#5294ff] drop-shadow-[0_0_10px_#5294ff]drop-shadow-[0_0_20px_#5294ff] hover:cursor-pointer">
        //             Dashboard
        //         </a>
        //         <a className="flex items-center gap-3 hover:text-white font-bold hover:cursor-pointer">
        //             <ChartBarIcon className="w-6" /> Markets
        //         </a>
        //         <a className="flex items-center gap-3 hover:text-white font-bold hover:cursor-pointer">
        //             Settings
        //         </a>

        //     </div>

        //     <div>
        //         {session.data?.user ? <PrimaryButton onClick={() => {
        //             signOut()
        //         }}> Logout </PrimaryButton> : <PrimaryButton onClick={() => {
        //             signIn("google", { callbackUrl: "/dashboard" })
        //         }}> SignIn </PrimaryButton>}
        //     </div>
        // </div>
        <nav className="fixed top-0 w-full bg-gray-950/70 backdrop-blur-md border-b border-slate-700/50 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push("/")}>
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-gradient-to-br from-cyan-400 via-indigo-500 to-violet-500" />
                        </div>
                        <span className="text-xl font-bold text-slate-500">DCEX</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-slate-500 hover:text-white transition-colors">Features</a>
                        <a href="#security" className="text-slate-500 hover:text-white transition-colors">Security</a>
                        <a href="#about" className="text-slate-500 hover:text-white transition-colors">About</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        {session.data?.user ?

                            <button onClick={() => void signOut()} className="text-slate-500 hover:text-slate-600 text-md  transition-colors">Sign Out</button> :
                            <button onClick={() => void signIn("google")} className="text-slate-500 hover:text-slate-600 text-md  transition-colors">Sign In</button>
                    }

                        <button className="bg-gradient-to-r font-bold from-cyan-500 via-indigo-500 to-violet-500 text-black/60 px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-violet-700 transition-all" onClick={() => router.push("/signup")}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}