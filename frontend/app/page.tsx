import Image from "next/image";
import { LandingPage } from "./components/Landing";
import LandingPage2 from "./components/LandingPage2";
import LandingPage3 from "./components/LandingPage3";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-[#05050a] text-white">
      < LandingPage />
      {/* <LandingPage2 /> */ }
  {/* <LandingPage3 /> */ }
    </div >

  );
}
