import Image from "next/image";
import { LandingPage } from "./components/Landing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      < LandingPage />
      {/* <LandingPage2 /> */}
  {/* <LandingPage3 />  */}
    </div >

  );
}
