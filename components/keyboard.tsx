import { IconBrightnessDown, IconBrightnessUp, IconTable, IconSearch, IconMicrophone, IconMoon, IconPlayerTrackPrev, IconPlayerSkipForward, IconPlayerTrackNext, IconVolume3, IconVolume2, IconVolume, IconWorld, IconChevronUp, IconCommand, IconCaretUpFilled, IconCaretLeftFilled, IconCaretDownFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { Key } from "./key";


export const Keyboard = () => {
  return (
    <div className="h-[350px] w-auto max-w-[80rem] bg-zinc-800 rounded-2xl">
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
    <div className="flex items-center gap-1.5 pt-2 px-2 ">
      <Key className="w-20 items-end justify-start pb-1 pl-2">
        esc
      </Key>
      <Key variant="tr" className="flex flex-col gap-1">
        <IconBrightnessDown className="size-3" />
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
        <div className="rounded-full p-0.5 bg-gradient-to-tl from-zinc-800 via-zinc-950 to-zinc-800">
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
      <Key variant="rb" className="flex flex-col gap-1.5" >
        <div className="w-full flex justify-end px-2">
          <IconChevronUp className="size-3" />
        </div>
        <div>
          control
        </div>
      </Key>
      <Key variant="rb" className="flex flex-col gap-1.5">
        <div className="w-full flex justify-end pr-2">
          <OptionSvg className="size-3" />
        </div>
        <div className="">
          option
        </div>
      </Key>
      <Key variant="tbl" className="w-[66px] flex flex-col gap-1">
        <div className="flex justify-end w-full pr-2">
          <IconCommand className="size-3" />
        </div>
        <div className="justify-center">
          command
        </div>
      </Key>
      <Key variant="bl" className="w-[264px]">
        {''}
      </Key>
      <Key variant="full" className="w-[66px] flex flex-col gap-1" isBottomRow={true}>
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
          <Key variant="full" className="h-6">
            <IconCaretLeftFilled className="size-3" />
          </Key>
          <Key variant="tbr" className="h-6" >
            <IconCaretDownFilled className="size-3" />
          </Key>
          <Key variant="tbl" className="h-6">
            <IconCaretRightFilled className="size-3" />
          </Key>
        </div>
      </div>
    </div>
  );
};


const OptionSvg = ({ className }: { className: string }) => {

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