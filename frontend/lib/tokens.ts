export interface TokenDetails {
    name: string;
    mint: string;
    native: boolean;
    price: string;
    image: string
}
//list of token that we support
export let SUPPORTED_TOKENS: TokenDetails[] = [
    {
        name: "SOL",
        mint: "So11111111111111111111111111111111111111112",
        native: true,
        price: "180",
        image: "https://imgs.search.brave.com/n5PBnAUTmeNFhL-7_yJlJPC9VTO5_zzjsXe1kvYmguk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzY0LzIvc29sYW5h/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTY0MDI2/Ni5wbmc"
    },
    {
        name: "USDC",
        mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        native: false,
        price: "1",
        image: "https://imgs.search.brave.com/v4GS1a84OqBD8OJyL3O11HjI341YIqGf0zxlNYx9EwY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jcnlw/dG9sb2dvcy5jYy9s/b2dvcy91c2QtY29p/bi11c2RjLWxvZ28u/cG5nP3Y9MDQw"
    }, {
        name: "USDT",
        mint: "Es9vMFrzaC1H6zzggBqqqEgakx4eCnmLmJtZNe5yW3sn",
        native: false,
        price: "1",
        image: "https://imgs.search.brave.com/9jJ7VtdwP-OkbCfSx6zuv-kIMfNj30VN_KRUgrkjwEo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jcnlw/dG9sb2dvcy5jYy9s/b2dvcy90ZXRoZXIt/dXNkdC1sb2dvLnBu/Zz92PTA0MA"
    }]