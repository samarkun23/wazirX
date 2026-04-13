# what is valid 
- Send and Add funds are not valid in India even though withdraw is also invalid but it is not shown in the UI because of the design of the UI. So we have to remove send and add funds from the UI and also remove the functionality of send and add funds from the backend.
- Swap functionality is valid in India.

# What happened when you click on swap 
- So When you click on swap it will show you the swap ui where you can select the token you want to swap and the token you want to receive and then you can enter the amount you want to swap and then you can click on the swap button and it will show you the swap details and then you can confirm the swap and then it will show you the swap success message. 
- We are power our liquidity from the jupiter or if you want to use any other decentralized exchange then you can also use that but here we are using jupiter as our liquidity provider.
- High level we don't have a market maker so we are using the liquidity from the jupiter or dcex and we are not providing any liquidity to the jupiter but we are just using the liquidity from the jupiter and we are not taking any fee from the swap and we are not providing any incentive to the users for swapping but we are just providing a platform for swapping and we are not providing any liquidity to the jupiter but we are just using the liquidity from the jupiter and we are not taking any fee from the swap and we are not providing any incentive to the users for swapping but we are just providing a platform for swapping.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
