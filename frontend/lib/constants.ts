import { Connection } from "@solana/web3.js";
import axios from 'axios'
import { SUPPORTED_TOKENS } from "./tokens";

let LAST_UPDATE: number | null = null;
let prices: {
    [key: string]: {
        price: string;
    }
} = {};
const TOKEN_PRICE_REFRESH_INTERVAL = 60 * 1000; // every 6sec 



export const connection = new Connection("https://api.mainnet-beta.solana.com")

export async function getSupportedTokens() {
    const TOKEN_ID_MAP: { [mint: string]: string } = {
        'So11111111111111111111111111111111111111112': 'solana',
        'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': 'usd-coin',
        'Es9vMFrzaC1H6zzggBqqqEgakx4eCnmLmJtZNe5yW3sn': 'tether'
    };

    if (!LAST_UPDATE || new Date().getTime() - LAST_UPDATE > TOKEN_PRICE_REFRESH_INTERVAL) {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana,usd-coin,tether&vs_currencies=usd')

            const data = response.data;
            // console.log("BRO RES" , data);
            prices = Object.fromEntries(
                SUPPORTED_TOKENS.map(t => [t.mint, { price: data[TOKEN_ID_MAP[t.mint]]?.usd ?? 0 }])
            )

            LAST_UPDATE = Date.now();
        } catch (e) {
            console.log(e)
        }


    }
    return SUPPORTED_TOKENS.map(s => ({
        ...s,
        price: prices[s.mint]?.price ?? null,

    }))
}