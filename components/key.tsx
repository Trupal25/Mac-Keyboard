"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const Keyboard = () => {
  return (
    <div className="h-90 w-[57rem] max-w-[80rem] bg-zinc-800 rounded-2xl">
      <FirstrowKeys />
    </div>
  );
};

const Firstrow = () => {
  return (
    <div className="flex items-center ">

    </div>
  );
};

const FirstrowKeys = () => {
  return <div>
    <Key >
      esc
    </Key>
    <Key variant="rb">
      A
    </Key>
    {/* <Key variant="tr">
      A
    </Key>
    <Key variant="bl">
      A
    </Key>
    <Key variant="tbl">
      A
    </Key>
    <Key variant="full">
      A */}
    {/* </Key> */}
    <Key variant="tbr">
      A
    </Key>
  </div>
}

const Key = ({ className, children, variant = "default" }: {
  className?: string,
  children: React.ReactNode,
  variant?: "default" | "rb" | "tr" | "bl" | "tbl" | "tbr" | "full",
}) => {
  
  const shadowVariants = {
    default: {
      hover:"hover:shadow-[1px_1px_0px_0.7px_#52525b_inset,_-2px_4px_8px_0px_rgba(255,255,255,0.15)]",
      base:"shadow-[1px_1px_0px_0.7px_#52525b_inset,0px_10px_15px_-3px_#f5f5f5]"
    },
    rb: {
      hover: "hover:shadow-[-1px_-1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[-1px_-1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_10px_15px_-3px_#f5f5f5]"
    },
    tr: {
      hover: "hover:shadow-[-1px_1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[-1px_1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_10px_15px_-3px_#f5f5f5]"
    },
    bl: {
      hover: "hover:shadow-[1px_-1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[1px_-1px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_10px_15px_-3px_#f5f5f5]"
    },
    tbl: {
      hover: "hover:shadow-[1px_-1px_0px_0.5px_#52525b_inset,0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[1px_-1px_0px_0.5px_#52525b_inset,0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_10px_15px_-3px_#f5f5f5]"
    },
    tbr: {
      hover: "hover:shadow-[-1px_-1px_0px_0.5px_#52525b_inset,-0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[-1px_-1px_0px_0.5px_#52525b_inset,-0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_10px_15px_-3px_#f5f5f5]"
    },
    full: {
      hover: "hover:shadow-[1px_1px_0px_0.5px_#52525b_inset,-1px_-1px_0px_0.5px_#52525b_inset,0.5px_-0.5px_0px_0.5px_#52525b_inset,-0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08)]",
      base: "shadow-[1px_1px_0px_0.5px_#52525b_inset,-1px_-1px_0px_0.5px_#52525b_inset,0.5px_-0.5px_0px_0.5px_#52525b_inset,-0.5px_0.5px_0px_0.5px_#52525b_inset,_0px_6px_12px_rgba(255,255,255,0.08),0px_10px_15px_-3px_#f5f5f5]"
    },
  }
  
  return <div>
    <div className={cn(`bg-black text-white text-xs h-12 w-12 m-8 rounded-[6px] ${shadowVariants[variant].base} duration-1000 ${shadowVariants[variant].hover}`,    className)}
      
      >
      {children}
    </div>
  </div>
}



// const extracoolVariants = {
//   default: "shadow-[1px_1px_0px_1px_#3f3f46_inset,_0px_4px_8px_rgba(0,0,0,0.3)]",
//   pressed: "shadow-[inset_0px_2px_4px_rgba(0,0,0,0.6),_inset_1px_1px_0px_1px_#1f1f1f]",
//   highlighted: "shadow-[1px_1px_0px_1px_#6366f1_inset,_0px_4px_12px_rgba(99,102,241,0.3)]",
//   function: "shadow-[1px_1px_0px_1px_#374151_inset,_0px_2px_6px_rgba(0,0,0,0.2)]",
//   space: "shadow-[1px_1px_0px_1px_#3f3f46_inset,_0px_6px_16px_rgba(0,0,0,0.4)]",
//   enter: "shadow-[1px_1px_0px_1px_#059669_inset,_0px_4px_12px_rgba(5,150,105,0.3)]",
// };