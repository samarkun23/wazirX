"use client"
import { signIn, useSession } from "next-auth/react";
import { SecondaryButton } from "./Button";
import { useRouter } from "next/navigation";

export function LandingPage() {
    const session = useSession();
    const router = useRouter();

    return (
        <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/exchange_landingpage.jpg.avif')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                    Reinventing Crypto. One Trade at a Time.
                </h1>

                <p className="text-xl md:text-2xl mt-4 text-white/90 max-w-4xl">
                    Create a functionless wallet from India with your Google Account and
                    convert INR into cryptocurrency instantly.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex gap-5">

                    {session.data?.user ? <SecondaryButton onClick={() => {
                        router.push("/dashboard");
                    }}>Go to Dashboard</SecondaryButton> : <SecondaryButton onClick={() => {
                        signIn("google")
                    }}>Login with google</SecondaryButton>}
            </div>
        </div>
        </div >
    )
}