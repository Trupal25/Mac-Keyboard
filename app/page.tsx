import { Keyboard } from "@/components/keyboard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-neutral-900 to-neutral-950 relative">
      <div className="">

        <Keyboard />
      </div>
      <div className="absolute bottom-3 text-neutral-100 flex items-center gap-1 selection:bg-pink-500 selection:text-black">
        Made with 💖 by
        <Link href={"https://x.com/Trupal_19"} className="hover:underline flex items-center">

          <span className="relative">Trupal</span>

          <Image src="/logo.svg" alt="" width={12} height={12} className="mx-1" />
        </Link>
      </div>
    </div>
  );
}
