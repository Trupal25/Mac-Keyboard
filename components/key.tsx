"use client"
import { cn } from "@/lib/utils";
import { useRef } from "react";


export const Key = ({ className, children, variant = "tl", isBottomRow }: {
  className?: string,
  children: React.ReactNode,
  variant?: "tl" | "rb" | "tr" | "bl" | "tbl" | "tbr" | "full",
  isBottomRow?: boolean
}) => {

  const shadowVariants = {
    tl: {
      hover: "hover:shadow-[1px_1px_0px_0.7px_#52525b_inset,_-2px_4px_8px_0px_rgba(255,255,255,0.15)]",
      base: "shadow-[1px_1px_0px_0.7px_#52525b_inset,0px_4px_10px_-3px_#f2f2f2]"
    },
    rb: {
      hover: "hover:shadow-[-1px_-1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[-1px_-1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_4px_10px_-3px_#f2f2f2]"
    },
    tr: {
      hover: "hover:shadow-[-1px_1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[-1px_1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_4px_10px_-3px_#f2f2f2]"
    },
    bl: {
      hover: "hover:shadow-[1px_-1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[1px_-1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_4px_10px_-3px_#f2f2f2]"
    },
    tbl: {
      hover: "hover:shadow-[1px_-1px_0px_0.5px_#52525b_inset,0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[1px_-1px_0px_0.5px_#52525b_inset,0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_4px_10px_-3px_#f2f2f2]"
    },
    tbr: {
      hover: "hover:shadow-[-1px_-1px_0px_0.5px_#52525b_inset,-0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[-1px_-1px_0px_0.5px_#52525b_inset,-0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_4px_10px_-3px_#f2f2f2]"
    },
    full: {
      hover: "hover:shadow-[1px_1px_0px_0.5px_#52525b_inset,-1px_-1px_0px_0.5px_#52525b_inset,0.5px_-0.5px_0px_0.5px_#52525b_inset,-0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[1px_1px_0px_0.5px_#52525b_inset,-1px_-1px_0px_0.5px_#52525b_inset,0.5px_-0.5px_0px_0.5px_#52525b_inset,-0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_4px_10px_-3px_#f2f2f2]"
    },
  }

  const audioRef = useRef<HTMLAudioElement>(null)
  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      try {
        audioRef.current.play();
      } catch (error) {
        console.log("audio play failed", error)
      }
    }
  }
  return <>
    <div  onKeyDown={handleClick}>
      <audio src="/click.mp3" ref={audioRef} />
      <div className={cn(`bg-black text-neutral-100 text-[10px] h-12 w-12 rounded-[6px] flex items-center justify-center hover:scale-95`, shadowVariants[variant].base, shadowVariants[variant].hover, className)}
      >
        {children}
      </div>
    </div>
  </>
}




function userRef(p0: null) {
  throw new Error("Function not implemented.");
}
// const extracoolVariants = {
//   default: "shadow-[1px_1px_0px_1px_#3f3f46_inset,_0px_4px_8px_rgba(0,0,0,0.3)]",
//   pressed: "shadow-[inset_0px_2px_4px_rgba(0,0,0,0.6),_inset_1px_1px_0px_1px_#1f1f1f]",
//   highlighted: "shadow-[1px_1px_0px_1px_#6366f1_inset,_0px_4px_12px_rgba(99,102,241,0.3)]",
//   function: "shadow-[1px_1px_0px_1px_#374151_inset,_0px_2px_6px_rgba(0,0,0,0.2)]",
//   space: "shadow-[1px_1px_0px_1px_#3f3f46_inset,_0px_6px_16px_rgba(0,0,0,0.4)]",
//   enter: "shadow-[1px_1px_0px_1px_#059669_inset,_0px_4px_12px_rgba(5,150,105,0.3)]",
// };
