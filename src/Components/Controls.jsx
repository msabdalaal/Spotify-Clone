import React from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillStepBackward,
  AiFillStepForward,
  AiFillPlayCircle,
} from "react-icons/ai";
import { BiShuffle, BiRepeat, BiDevices } from "react-icons/bi";
import { BsVolumeUpFill } from "react-icons/bs";
import { HiOutlineQueueList } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Controls() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#181818] text-white p-4 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <img
          src={
            "https://i.scdn.co/image/ab67616d0000b2733b0863ab4f445711f8e1d6fb"
          }
          alt="song image"
          width={60}
          height={60}
          className="mr-2"
        />
        <div className="mr-4 flex flex-col max-w-[10vw]">
          <Link className="font-semibold w-full text-sm whitespace-nowrap overflow-x-hidden text-ellipsis hover:underline">
            La Mer
          </Link>
          <Link className="text-xs font-bold w-full text-neutral-400 whitespace-nowrap overflow-x-hidden text-ellipsis hover:underline">
            Emma Jackson
          </Link>
        </div>
        <AiOutlineHeart className="text-xl text-neutral-300 hover:text-white" />
      </div>
      <div>
        <div className="flex justify-center items-center text-2xl mb-2 text-neutral-300 px-8">
          <BiShuffle className="mr-4 hover:text-white" />
          <AiFillStepBackward className="mr-4 hover:text-white" />
          <AiFillPlayCircle className="text-4xl text-white mr-4 hover:scale-110 transition-all" />
          <AiFillStepForward className="mr-4 hover:text-white" />
          <BiRepeat />
        </div>
        <div className="flex justify-center items-center">
          <p className="mr-2 text-xs text-neutral-300">1:44</p>
          <div
            id="duration"
            className={`duration before:w-[100%] rounded-md relative w-[30vw] mr-2 h-1 bg-neutral-500 `}
          />
          <p className="mr-2 text-xs text-neutral-300">1:44</p>
        </div>
      </div>
      <div className="flex justify-center items-center text-xl text-neutral-300 ">
        <HiOutlineQueueList className="mr-2 hover:text-white" />
        <BiDevices className="mr-2 hover:text-white" />
        <BsVolumeUpFill className="mr-2 hover:text-white" />
        <div
          id="duration"
          className={`duration before:w-[100%] rounded-md relative w-[6rem] mr-2 h-1 bg-neutral-500 `}
        />
      </div>
    </div>
  );
}
