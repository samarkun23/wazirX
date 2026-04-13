"use client"
import { TokenWithbalance } from "@/app/api/hooks/useTokens"
import { SUPPORTED_TOKENS, TokenDetails } from "@/lib/tokens"
import { ArrowDownUp, ArrowLeft } from "lucide-react"
import { ReactElement, ReactNode, useState } from "react"

export function Swap({ publicKey, tokenBalance }: {
    publicKey: string,
    tokenBalance: {
        totalBalance: number,
        tokens: TokenWithbalance[]
    } | null;
}) {
    const [baseAsset, setBaseAsset] = useState(SUPPORTED_TOKENS[0])
    const [quoteAsset, setQuoteAsset] = useState(SUPPORTED_TOKENS[1])

    return <div className="">
        <div className=" my-3 text-lg font-semibold flex items-center text-white/90 hover:cursor-pointer hover:text-white/80"> <ArrowLeft /> back</div>
        <div className="text-2xl font-bold mb-5">
            Swap Tokens
        </div>
        <SwapInputRow onSelect={(asset) => {
            setBaseAsset(asset)
        }}
            selectedToken={baseAsset}
            title={"You pay"}
            topBorderEnabled={true}
            bottomBorderEnabled={false}
            subtitle={<div className="text-white/90 ">Current balance: <span className="font-semibold">{tokenBalance?.tokens.find(x => x.name === baseAsset.name)?.balance} {baseAsset.name} </span></div>}
        />
        <div className="flex justify-center">
            <div className="cursor-pointer rounded-full w-10 h-10 border absolute mt-[-20px] bg-white text-black flex justify-center items-center hover:bg-gray-300" onClick={() => {
                let baseAssetTemp = baseAsset;
                setBaseAsset(quoteAsset);
                setQuoteAsset(baseAssetTemp)
            }}>
                <ArrowDownUp />
            </div>
        </div>

        <SwapInputRow onSelect={(asset) => {
            setQuoteAsset(asset)
        }}
            selectedToken={quoteAsset}
            title={"You receive"}
            topBorderEnabled={false}
            bottomBorderEnabled={true}
        />
    </div>
}

function SwapInputRow({ onSelect, selectedToken, title, subtitle, topBorderEnabled, bottomBorderEnabled }: {
    onSelect: (asset: TokenDetails) => void;
    selectedToken: TokenDetails;
    title: string;
    subtitle?: ReactNode;
    topBorderEnabled: boolean;
    bottomBorderEnabled: boolean
}) {
    return <div className={`border flex justify-between p-6 ${topBorderEnabled ? "rounded-t-2xl" : ""} ${bottomBorderEnabled ? "rounded-b-2xl" : ""}`}>
        <div className="">
            <div className="text-lg font-semibold">
                {title}
            </div>
            <AssestSelector selectedToken={selectedToken} onSelect={onSelect} />
            {subtitle}
        </div>
    </div>
}

function AssestSelector({ selectedToken, onSelect }: {
    selectedToken: TokenDetails,
    onSelect: (asset: TokenDetails) => void;
}) {
    return <div className="w-24">
        <select id="countries" className=" my-2 block w-full px-3 py-2.5 bg-black/20 border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand focus:bg-black/50 shadow-xs placeholder:text-body"
            value={selectedToken.name}
            onChange={(e) => {
                const token = SUPPORTED_TOKENS.find(
                    t => t.name === e.target.value
                )
                if (token) onSelect(token)
            }}

        >
            {
                SUPPORTED_TOKENS.map(token =>
                    <option key={token.name} value={token.name}>{token.name}</option>
                )
            }
        </select>
    </div>
}