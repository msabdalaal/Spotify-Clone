import React from "react";
import { Link } from "react-router-dom";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div>
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        width={60}
        height={60}
        className="mr-3"
      />
    </div>
    <div className="mr-4 flex flex-col max-w-[10vw]">
      <Link className="font-semibold text-white w-full text-sm whitespace-nowrap overflow-x-hidden text-ellipsis hover:underline">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </Link>
      <Link className="text-xs font-bold w-full text-neutral-400 whitespace-nowrap overflow-x-hidden text-ellipsis hover:underline">
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </Link>
    </div>
  </div>
);

export default Track;
