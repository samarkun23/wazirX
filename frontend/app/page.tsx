import Image from "next/image";
import { LandingPage } from "./components/Landing";

export default function Home() {
  console.log("DATABASE_URL:", process.env.DATABASE_URL);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      < LandingPage />
      {/* <LandingPage2 /> */}
  {/* <LandingPage3 />  */}
    </div >

  );
}
