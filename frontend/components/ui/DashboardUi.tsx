"use client"
import { PrimaryButton } from "@/app/components/Button";
import { ChartBarIcon, CogIcon, HomeIcon } from "lucide-react"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


function Greeting({
    image, name, publicKey
}: {
    image: string, name: string, publicKey: string
}) {

    return <div className="mt-10">
        <div className=" items-center gap-4 flex justify-evenly">
            <span className="text-gray-200">Welcome {name} </span>
            <img src={image} alt="" className="w-10 h-10 rounded-full" />
        </div>
        <div className="text-gray-400 mt-5">{publicKey}</div>
    </div>
}

function Assest({ publicKey }: { publicKey: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {

        if(copied){
            let timeout = setTimeout(() => {
                setCopied(false)
            }, 3000)
            return () => {
                clearTimeout(timeout)
            }
        }
    },[copied])

    return <div className="text-slate-500 mt-4">
        Account assest
        <br />

        <div className="flex justify-between">
            <div>
                
            </div>

            <div>
                <PrimaryButton onClick={() => {
                    navigator.clipboard.writeText(publicKey)
                    setCopied(true)
                }}>{copied ? "Copied" : "Copy address" }</PrimaryButton>
            </div>
        </div>
    </div>
}


export default function DashboardUi({ publicKey }: {
    publicKey: string
}) {
    const session = useSession();
    return (

        <div className="flex bg-black h-screen text-white justify-center">

            <div>
                <Greeting name={session.data?.user?.name ?? ""} image={session.data?.user?.image ?? "wazirx_pfp.webp"} publicKey={publicKey} />
                <Assest publicKey={publicKey} />
            </div>

        </div>
    )
}