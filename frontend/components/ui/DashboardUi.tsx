"use client"
import { useTokens } from "@/app/api/hooks/useTokens";
import { PrimaryButton } from "@/app/components/Button";
import { TokenList } from "@/app/components/TokenList";
import { Wallet } from "lucide-react"
import { useSession } from "next-auth/react";
import { ReactHTMLElement, useEffect, useState } from "react";
import { TabButton } from "./TabButton";


function TokenRowsInner({ token }: { token: any }) {
    return <div className="bg-gradient-to-br from-gray-500/90 to-black/80 rounded-2xl m-2">
        <div className="flex text-white rounded-2xl ">
            <div className="flex w-full p-2">
                <div>
                    <img src={token.image} className="w-10 h-10 rounded-full" />
                </div>
                <div className="flex items-center gap-10 w-full justify-between">
                    <div className="flex pl-2">
                        {token.name}
                    </div>
                    <div className="flex">
                        ~ ${token.price}
                    </div>
                </div>
            </div>

        </div>

    </div>
}

type Tab = "tokens" | "send" | "add_funds" | "swap" | "withdraw"
const tabs: Tab[] = ["tokens", "send", "add_funds", "swap", "withdraw"];

function DashboardCard({
    image,
    name,
    publicKey,
    totalBalance,
    tokens
}: {
    image: string
    name: string
    publicKey: string
    totalBalance?: number
    tokens?: any[]
}) {

    const [copied, setCopied] = useState(false);
    const [selectedTab, setSelectedTab] = useState<Tab>("tokens");

    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => setCopied(false), 3000);
            return () => clearTimeout(timeout);
        }
    }, [copied]);

    return (
        <div className="mt-10 flex justify-center">
            <div className="w-full min-w-xl max-w-2xl rounded-2xl bg-gradient-to-br from-gray-500/90 to-black/80 p-10 shadow-xl border border-white/30">

                {/* Header */}
                <div className="flex items-center gap-4">
                    <img
                        src={image}
                        alt={name}
                        className="w-12 h-12 rounded-full ring-2 ring-white/60"
                    />
                    <div>
                        <p className="text-sm text-white">Welcome back</p>
                        <h2 className="text-lg font-semibold text-white">{name}</h2>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-gray-700" />

                {/* Wallet + Balance */}
                <div className="flex justify-between items-center">

                    <div>
                        <p className="text-sm text-gray-200 font-semibold">Total Balance</p>
                        <div className="flex align-middle items-center gap-1">
                            <h3 className="text-4xl font-bold text-white">
                                ${totalBalance?.toFixed(2) ?? "—"}
                            </h3>
                            <div className="font-bold text-2xl text-gray-300">
                                USD
                            </div>

                        </div>
                    </div>

                    <div
                        className="drop-shadow-[0_0_10px_rgba(222,219,220,0.4)]  cursor-pointer rounded-lg bg-gray-500/60 p-2 text-sm text-gray-100 font-mono flex gap-2 items-center"
                        onClick={() => {
                            navigator.clipboard.writeText(publicKey);
                            setCopied(true);
                        }}
                    >
                        <Wallet />
                        {copied ? "Copied" : "Copy Address"}
                    </div>
                </div>
                {tabs.map(tab => <TabButton key={Math.random()} active={tab === selectedTab} onClick={() => { setSelectedTab(tab) }}>
                    {tab}
                </TabButton>)}

                {/* Tokens */}
                {selectedTab === 'tokens' ?
                    <div className="mt-5">
                        <p className="text-xs text-gray-400 mb-2"> Your Assets</p>

                        {/* {tokens?.map((t:unknown) => <TokenRowsInner key={Math.random()} token={t} />)} */}
                        <TokenList tokens={tokens} />
                    </div>
                    :
                    null
                }

            </div>
        </div>
    );
}

export default function DashboardUi({ publicKey }: {
    publicKey: string
}) {
    const session = useSession();
    const { tokenBalances, loading } = useTokens(publicKey);
    console.log("DATABASE_URL:", process.env.DATABASE_URL);

    if (loading) return <div>
        loading....
    </div>
    return (

        <div className="flex bg-black h-screen text-white justify-center pt-20">

            <div>
                {/* <Greeting name={session.data?.user?.name ?? ""} image={"wazirx_pfp.webp"} publicKey={publicKey || "jakjdf"}/> */}
                {/* <Assest publicKey={publicKey} /> */}
                <DashboardCard
                    image="wazirx_pfp.webp"
                    name={session.data?.user?.name ?? ""}
                    publicKey={publicKey}
                    totalBalance={tokenBalances?.totalBalance}
                    tokens={tokenBalances?.tokens}
                />
                {/* <TokenList tokens={tokenBalances?.tokens} key={Math.random()}/> */}
            </div>

        </div>
    )
}
