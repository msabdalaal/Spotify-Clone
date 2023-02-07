import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { PlayPause } from "./PlayPause";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

export default function SongCard({ song, isPlaying, activeSong, data, i }) {
  const dispatch = useDispatch();

  function handelPauseClick() {
    dispatch(playPause(false));
  }
  function handelPlayClick() {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }
  return (
    <div className="flex flex-col w-40 lg:w-64 p-4 bg-[#181818] mb-10 rounded-md hover:bg-[#282828] cursor-pointer group/item transition-all">
      <div className="relative w-full transition-all">
        <img
          alt="Song_img"
          src={song?.images?.coverart}
          className={`rounded-md`}
        />
        <div className="absolute opacity-0 top-[45%] right-2 h-12 w-12 rounded-full p-2 bg-green-500 hover:scale-110 origin-center group-hover/item:opacity-100 transition-all hover:transition-all">
          {isPlaying && activeSong?.title === song.title ? (
            <BsFillPauseFill
              className="w-full h-full"
              onClick={handelPauseClick}
            />
          ) : (
            <BsFillPlayFill
              className="w-full h-full"
              onClick={handelPlayClick}
            />
          )}
        </div>
        <h2 className="text-white font-bold mt-4 max-h-12 text-ellipsis overflow-hidden">
          {song?.title}
        </h2>
        <p className="text-neutral-400 font-medium max-h-8 mt-2 text-sm">
          {song?.subtitle}
        </p>
      </div>
    </div>
  );
}
