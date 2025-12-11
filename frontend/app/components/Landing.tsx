"use client"
import { signIn, useSession } from "next-auth/react";
import { SecondaryButton } from "./Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LandingPage() {
    const session = useSession();
    const router = useRouter();

    return (
        <div>
            <section className="flex flex-col items-center text-center px-6 pt-24 overflow-hidden">

                {/* BACKGROUND GLOW */}
                <div className="absolute top-24 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[200px]"></div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-2xl md:text-6xl font-extrabold max-w-5xl leading-tight"
                >
                    Swap, Buy, Sell — All From Your
                    <span className="text-indigo-400"> Personal Wallet</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-xl text-white/60 max-w-2xl mt-6"
                >
                    No pooled funds. Every user gets their own on-chain wallet with full transparency.”
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-10 flex gap-4"
                >
                    {session.data?.user ? <Button onClick={() => {
                        router.push("/dashboard")
                    }} className="text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-700">
                        Start Trading <ArrowRight className="ml-2 h-5 w-5" />
                    </Button> : <Button onClick={() => {
                        signIn("google")
                    }} className="text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-700 shadow-[0_0_30px_2px_rgba(59,130,246,0.7)]">
                        Exchange <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>}

                    <Button variant="secondary" className="text-lg px-8 py-6 border-white/30 hover:bg-white/10 shadow-[0_0_20px_2px_rgba(224,224,224,0.8)] curoso ">
                        Explore
                    </Button>
                </motion.div>
            </section>

            {/* Buttons */}
            {/* <div className="mt-8 flex gap-5">

                {session.data?.user ? <SecondaryButton onClick={() => {
                    router.push("/dashboard");
                }}>Go to Dashboard</SecondaryButton> : <SecondaryButton onClick={() => {
                    signIn("google")
                }}>Login with google</SecondaryButton>}
            </div> */}
        </div>
    )
}