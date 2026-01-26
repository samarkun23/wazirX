"use client"
import { TrendingUp, ArrowLeft } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SignUp() {
    const router = useRouter();
    const { status } = useSession();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (status === "loading") {
            setLoading(true);
            return;
        }

        if (status === "authenticated") {
            setLoading(true);

            // 👇 artificial delay ONLY for preview
            // const timer = setTimeout(() => {
            router.push("/dashboard");
            // }, 2000);

            // return () => clearTimeout(timer);
        }

        // user NOT logged in → show signup UI
        setLoading(false);
    }, [])


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white/40 text-2xl bg-black">
                Loading...
            </div>
        );
    }


    return (

        <div className="min-h-screen bg-gradient-to-b from-black via-slate-800 to-black flex flex-col">
            <button
                onClick={() => router.push('/')}
                className="fixed top-6 left-6 z-50 flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
            </button>


            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-gradient-to-br from-black to-slate-800 border border-slate-700 rounded-2xl p-8">
                        <div className="mb-8 text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-slate-300 mb-2">Welcome to DCEX</h1>
                            <p className="text-slate-500">Decentralized trading, redefined</p>
                        </div>

                        <div className="space-y-4 mb-6">
                            <button className="w-full bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 group">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                <span>Sign in with Google</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
