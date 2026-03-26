import { NextRequest, NextResponse } from "next/server";
import { getAccount, getAssociatedTokenAddress, getMint } from '@solana/spl-token'
import { connection, getSupportedTokens, SUPPORTED_TOKENS } from "@/lib/constants";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";


export async function GET(req: NextRequest){
    const { searchParams } = new URL(req.url);
    const address = searchParams.get('address') as unknown as string;
    //now we have address now we need to find token of this specific user 

    // now we need to find this user balance for this specific token 
    // so we need to create ATA , PDA 
    const supportedTokens = await getSupportedTokens();
    const balances = await Promise.all(supportedTokens.map(token => getAccountBalance(token, address)))

    const tokens = supportedTokens.map((token, index) => ({
        ...token,
        balance: balances[index],
        usdBalance: balances[index] * Number(token.price ?? 0)
    }))
    return NextResponse.json({
        // tokens: supportedTokens.map((token, index) => ({
        //     ...token,
        //     balance: balances[index],
        //     usdBalance: balances[index]! * Number(token.price)
        // }))
        tokens, 
        totalBalance: tokens.reduce((acc , val) => acc + val.usdBalance, 0 ), // array into single number 
    })
}

async function getAccountBalance(token: {
    name: string;
    mint: string;
    native: boolean;
}, address: string){
    if(token.native) {
        let balance = await connection.getBalance(new PublicKey(address))
        console.log("BALANCE IS " + balance)
        return balance / LAMPORTS_PER_SOL;
    }
    const ata = await getAssociatedTokenAddress(new PublicKey(token.mint), new PublicKey(address))

    try{
        const account = await getAccount(connection, ata);
        const mint = await getMint(connection, new PublicKey(token.mint));
        return Number(account.amount) / (10 ** mint.decimals)
    }catch(e){
        console.log(e)
        return 0;
    }

}

function getPrice() {

}