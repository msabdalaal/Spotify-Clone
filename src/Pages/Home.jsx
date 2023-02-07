import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import SongCard from "../Components/SongCard";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import { genres } from "../assets/constants";
import BeatLoader from "react-spinners/BeatLoader";

export default function Home() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);
  if (isFetching) return <Loader title="Loading Songs.." />;
  if (error) return <Error />;
  let headerIconsStyle = "text-3xl hover:cursor-pointer";
  return (
    <div className="bg-[#121212] w-full h-fit p-4 lg:pl-[21rem] ">
      <header className="flex justify-end mb-8">
        {/* <FaAngleLeft
          className={`${headerIconsStyle} text-white bg-black rounded-full font-light`}
        /> */}
        <CgProfile
          className={`${headerIconsStyle} text-white bg-black rounded-full font-light`}
        />
      </header>
      <h1 className="text-white font-bold text-3xl mb-4 ">Top on the World</h1>
      <div className="flex flex-wrap flex-row justify-around">
        {data?.map((song, i) => {
          return song?.images?.coverart ? (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ) : (
            ``
          );
        })}
        <SongCard />
      </div>
    </div>
  );
}
