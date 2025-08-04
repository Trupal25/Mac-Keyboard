"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretDownFilled,
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
    <div className="h-90 w-auto max-w-[80rem] bg-zinc-800 rounded-2xl">
      <Firstrow />
      <Secondrow />
      <Thirdrow />
      <Fourthrow />
      <Fifthrow />
      <Sixthrow />
    </div>
  );
};

const Firstrow = () => {
  return (
    <div className="flex items-center gap-1.5 mt-2 mx-2 ">
      <Key className="w-20 items-end justify-start pb-1 pl-2">
        esc
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconBrightnessDown className="size-3"/>
        F1
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconBrightnessUp className="size-3" />
        F2
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconTable className="size-3" />
        F3
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconSearch className="size-3" />
        F4
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconMicrophone className="size-3" />
        F5
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconMoon className="size-3" />
        F6
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconPlayerTrackPrev className="size-3" />
        F7
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconPlayerSkipForward className="size-3" />
        F8
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconPlayerTrackNext className="size-3" />
        F9
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconVolume3 className="size-3" />
        F10
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconVolume2 className="size-3" />
        F11
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconVolume className="size-3" />
        F12
      </Key>
      <Key variant="tbr">
        <div className="rounded-full p-0.5 bg-gradient-to-t from-zinc-900 via-zinc-950 to-zinc-900">
          <div className="rounded-full p-3 bg-black"></div>
        </div>
      </Key>
    </div>
  );
};
const Secondrow = () => {
  
  return <div className="flex items-center gap-1.5 mt-2 mx-2">
    <Key variant="rb" className="flex flex-col gap-1">
      <div>
        ~
      </div>
      <div>
        `
      </div>
    </Key>
    <Key variant="tr" className="flex flex-col">
      <div>
        !
      </div>
      <div>
        1
      </div>
    </Key>
    <Key variant="bl" className="flex flex-col">
      <div>
        @
      </div>
      <div>
        2
      </div>
    </Key>
    <Key variant="tbl" className="flex flex-col">
      <div>
        #
      </div>
      <div>
        3
      </div>
    </Key>
    <Key variant="full" className="flex flex-col">
      <div>
        $
      </div>
      <div>
        4
      </div>
    </Key>
    <Key variant="tbr" className="flex flex-col">
      <div>
        %
      </div>
      <div>
        5
      </div>
    </Key>
    <Key variant="rb" className="flex flex-col">
      <div>
        ^
      </div>
      <div>
        6
      </div>
    </Key>
    <Key variant="tr" className="flex flex-col">
      <div>
        &
      </div>
      <div>
        7
      </div>
    </Key>
    <Key variant="bl" className="flex flex-col">
      <div>
        *
      </div>
      <div>
        8
      </div>
    </Key>
    <Key variant="tbl" className="flex flex-col">
      <div>
        (
      </div>
      <div>
        9
      </div>
    </Key>
    <Key variant="full" className="flex flex-col">
      <div>
        )
      </div>
      <div>
        0
      </div>
    </Key>
    <Key variant="tbr" className="flex flex-col">
      <div>
        &mdash;
      </div>
      <div>
        -
      </div>
    </Key>
    <Key variant="tbr" className="flex flex-col">
      <div>
        +
      </div>
      <div>
        =
      </div>
    </Key>
    <Key variant="tbr" className="w-20 items-end justify-end pb-1 pr-2">
      Delete
    </Key>
  </div>
}
const Thirdrow = () => {
    return (
      <div className="flex items-center gap-1.5 mt-2 mx-2 ">
        <Key className="w-20 items-end justify-start pb-1 pl-2">
          tab
        </Key>
        <Key variant="rb">
          Q
        </Key>
        <Key variant="tr">
          W
        </Key>
        <Key variant="bl">
          E
        </Key>
        <Key variant="tbl">
          R
        </Key>
        <Key variant="full">
          T
        </Key>
        <Key variant="tbr">
          Y
        </Key>
        <Key variant="tbr">
          U
        </Key>
        <Key variant="rb">
          I
        </Key>
        <Key variant="tr">
          O
        </Key>
        <Key variant="bl">
          P
        </Key>
        <Key variant="tbl" className="flex flex-col">
          <span className="block">{'{'}</span>
          <span className="block">{'['}</span>
        </Key>
        <Key variant="tbl" className="flex flex-col">
          <span className="block">{'}'}</span>
          <span className="block">{']'}</span>
        </Key>
        <Key variant="tbl" className="flex flex-col">
          <span className="block">{'|'}</span>
          <span className="block">{'\\'}</span>
        </Key>
      </div>
    )
}
const Fourthrow = () => {
  
    return (
      <div className="flex items-center gap-1.5 mt-2 mx-2 ">
        <Key className="w-[90px] items-end justify-start pb-1 pl-2">
          caps lock
        </Key>
        <Key variant="rb">
          A
        </Key>
        <Key variant="tr">
          S
        </Key>
        <Key variant="tbl">
          D
        </Key>
        <Key variant="full">
          F
        </Key>
        <Key variant="tbr">
          G
        </Key>
        <Key variant="rb">
          H
        </Key>
        <Key variant="tr">
          J
        </Key>
        <Key variant="bl">
          K
        </Key>
        <Key variant="tbl">
          L
        </Key>
        <Key variant="tbl" className="flex flex-col">
          <span className="block">:</span>
          <span className="block">;</span>
        </Key>
        <Key variant="tbl" className="flex flex-col">
          <span className="block">"</span>
          <span className="block">'</span>
        </Key>
        <Key variant="tbr" className="w-[92px]  items-end justify-end pb-1 pr-2">
          return
        </Key>
        
      </div>
    );
}
const Fifthrow = () => {
    return (
      <div className="flex items-center gap-1.5 mt-2 mx-2 ">
        <Key className="w-[120px] items-end justify-start pb-1 pl-2">
          shift
        </Key>
        <Key variant="rb">
          Z
        </Key>
        <Key variant="tr">
          X
        </Key>
        <Key variant="bl">
          C
        </Key>
        <Key variant="tbl">
          V
        </Key>
        <Key variant="full">
          B
        </Key>
        <Key variant="tbr">
          N
        </Key>
        <Key variant="rb">
          M
        </Key>
        <Key variant="tbl" className="flex flex-col">
          <span className="block">{'<'}</span>
          <span className="block">{','}</span>
        </Key>
        <Key variant="tbl" className="flex flex-col">
          <span className="block">{'>'}</span>
          <span className="block">{'.'}</span>
        </Key>
        <Key variant="tbl" className="flex flex-col">
          <span className="block">{'?'}</span>
          <span className="block">{'/'}</span>
        </Key>
        <Key variant="full" className="w-[116px] items-end justify-end pb-1 pr-2">
          shift
        </Key>
      </div>
    );
}
const Sixthrow = () => {
  return (
    <div className="flex items-center gap-1.5 mt-2 mx-2 ">
      <Key variant="bl" className="flex flex-col gap-2 px-2">
        <div className="flex w-full justify-end">
        fn
        </div>
        <div className="flex w-full justify-start">
        <IconWorld className="size-3" />
        </div>
      </Key>
      <Key variant="rb" className="flex flex-col gap-1.5">
        <div className="w-full flex justify-end px-2">
        <IconChevronUp className="size-3" />
        </div>
        <div>
          control
        </div>
      </Key>
      <Key variant="rb" className="flex flex-col gap-1.5">
        <div className="w-full flex justify-end pr-2">
        <OptionSvg className="size-3"/>
        </div>
        <div className="">
        option
        </div>
      </Key>
      <Key variant="tbl" className="w-[66px] flex flex-col gap-1">
        <div className="flex justify-end w-full pr-2">
        <IconCommand className="size-3"/>
        </div>
        <div className="justify-center">
        command
        </div>
      </Key>
      <Key variant="bl" className="w-[264px]">
        {''}
      </Key>
      <Key variant="rb" className="w-[66px] flex flex-col gap-1">
        <div className="flex justify-start w-full pl-2">
          <IconCommand className="size-3" />
        </div>
        <div className="justify-center">
          command
        </div>
      </Key>
      <Key variant="rb" className="flex flex-col gap-1.5">
        <div className="w-full flex justify-start pl-2">
          <OptionSvg className="size-3" />
        </div>
        <div className="">
          option
        </div>
      </Key>
      <div className="ml-1">
        <div className="flex justify-center">
          <Key variant="tr" className="h-6">
            <IconCaretUpFilled className="size-3" />
          </Key>
        </div>
        <div className="flex">
          <Key variant="tr" className="h-6">
            <IconCaretLeftFilled className="size-3" />
          </Key>
          <Key variant="tr" className="h-6">
            <IconCaretDownFilled className="size-3"/>
          </Key>
          <Key variant="tr" className="h-6">
            <IconCaretRightFilled className="size-3" />
          </Key>
        </div>
     </div>
    </div>
  );
};

const Key = ({ className, children, variant = "default" }: {
  className?: string,
  children: React.ReactNode,
  variant?: "default" | "rb" | "tr" | "bl" | "tbl" | "tbr" | "full",
}) => {

  const shadowVariants = {
    default: {
      hover: "hover:shadow-[1px_1px_0px_0.7px_#52525b_inset,_-2px_4px_8px_0px_rgba(255,255,255,0.15)]",
      base: "shadow-[1px_1px_0px_0.7px_#52525b_inset,0px_10px_15px_-3px_#f5f5f5]"
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
    <div className={cn(`bg-black text-white text-[10px] h-12 w-12 rounded-[6px] ${shadowVariants[variant].base} duration-200 ${shadowVariants[variant].hover} flex items-center justify-center`, className)}

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

const OptionSvg =  ({className}:{className:string}) => {

  return <svg
    fill="none"
    version="1.1"
    id="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={className}
  >
    <rect
      stroke="currentColor"
      strokeWidth={2}
      x="18"
      y="5"
      width="10"
      height="2"
    />
    <polygon
      stroke="currentColor"
      strokeWidth={2}
      points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
    />
    <rect
      id="_Transparent_Rectangle_"
      className="st0"
      width="32"
      height="32"
      stroke="none"
    />
  </svg>
}