"use client"
import { signIn, useSession } from "next-auth/react";
import { SecondaryButton } from "./Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Lock, Shield, TrendingUp, Users, Zap } from "lucide-react";

export function LandingPage() {
    const session = useSession();
    const router = useRouter();

    return (
        <div className="" style={{
            background: 'black'
        }}>
            <main className="pt-16">
                <section className="relative overflow-hidden ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 ">
                        <div className="text-center ">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Trade Crypt with your
                                <span className="block bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 text-transparent bg-clip-text">
                                    Personal Wallet
                                </span>
                            </h1>
                            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
                                No pooled funds. Every user gets their own on-chain wallet with full transparency
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r  from-cyan-500 via-indigo-500 to-violet-600 text-black/60 px-8 py-4 rounded-lg text-lg font-bold hover:from-cyan-600 hover:via-indigo-600 hover:to-violet-700 transition-all flex items-center justify-center group"
                                    onClick={() => router.push("/signup")}
                                >
                                    Start Trading Now
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700">
                                    View Markets
                                </button>
                            </div>
                            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">$2.4B+</div>
                                    <div className="text-slate-500">Trading Volume</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">150K+</div>
                                    <div className="text-slate-500">Active Users</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">200+</div>
                                    <div className="text-slate-500">Trading Pairs</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-slate-500">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-24 bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">Why Choose DCEX?</h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                                Built for traders who demand the best in security, speed, and reliability
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400  via-indigo-500 to-violet-500 rounded-lg flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-300 mb-4">Lightning Fast</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Execute trades in milliseconds with our high-performance matching engine. No delays, no missed opportunities.
                                </p>
                            </div>
                            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400  via-indigo-500 to-violet-500 rounded-lg flex items-center justify-center mb-6">
                                    <Shield className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-300 mb-4">Bank-Grade Security</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Your assets are protected with multi-signature wallets, cold storage, and advanced encryption technology.
                                </p>
                            </div>
                            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400  via-indigo-500 to-violet-500 rounded-lg flex items-center justify-center mb-6">
                                    <Globe className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-300 mb-4">Truly Decentralized</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    No central authority. Trade peer-to-peer with complete transparency and full control of your funds.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="security" className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Security First, Always
                                </h2>
                                <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                                    We've built DCEX from the ground up with security as our top priority. Your assets deserve nothing less than the highest level of protection.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-indigo-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Lock className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-300 mb-2">Non-Custodial Wallets</h3>
                                            <p className="text-slate-500">You control your private keys. We never have access to your funds.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-indigo-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Smart Contract Audits</h3>
                                            <p className="text-slate-500">All contracts are audited by leading security firms.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-indigo-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Users className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Community Governed</h3>
                                            <p className="text-slate-500">Decentralized governance puts power in the hands of users.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-gradient-to-br from-cyan-400  via-indigo-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Shield className="w-16 h-16 text-black" />
                                        </div>
                                        <div className="text-5xl font-bold text-white mb-2">100%</div>
                                        <div className="text-xl text-slate-300">Secure</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-black border-t border-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-black" />
                                </div>
                                <span className="text-xl font-bold text-white">DCEX</span>
                            </div>
                            <p className="text-slate-400">The future of decentralized trading</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Security</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Compliance</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                        <p>&copy; 2024 DCEX. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}