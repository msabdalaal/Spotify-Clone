import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

export const PlayPause = (
  isPlaying,
  activeSong,
  song,
  handlePause,
  handelPlay
) =>
  isPlaying && activeSong?.title === song?.title ? (
    <BsFillPlayFill className="w-full h-full" onClick={handelPlay} />
  ) : (
    <BsFillPlayFill className="w-full h-full" onClick={handelPlay} />
  );
