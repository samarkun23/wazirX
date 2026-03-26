
export function TokenList({ tokens }: {
    tokens: any
}) {
    return <div>
        {tokens.map((t: unknown) => <TokenRows key={Math.random()} token={t} />)}
    </div>
}

function TokenRows({ token }: { token: any }) {
    return <div className="border border-white/30 drop-shadow-[0_0_10px_rgba(222,219,220,0.3)]    bg-gradient-to-br from-gray-500/90 to-black/80 rounded-2xl m-2 flex items-center justify-between p-2 scroll">
        <div className="flex text-white rounded-2xl ">
            <div className="flex w-full items-center">
                <div>
                    <img src={token.image} className="w-10 h-10 rounded-full" />
                </div>
                <div className=" pl-2">
                    <div className="font-bold">
                        {token.name}
                    </div>
                    <div className=" text-sm">
                        1 {token.name} = ~ ${token.price}
                    </div>
                </div>
            </div>

        </div>
        <div>
            <div className="font-bold">
                {token.usdBalance}
            </div>
            <div className="font-slim">
                {token.balance}
            </div>
        </div>

    </div>
}