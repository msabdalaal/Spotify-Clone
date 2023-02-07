import React from "react";
import logo from "../assets/Spotify_Logo_RGB_White.png";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import {
  BsFillPlusSquareFill,
  BsFillSuitHeartFill,
  BsMenuApp,
  BsMenuAppFill,
} from "react-icons/bs";
import { useRef } from "react";

export default function Navbar() {
  let page = useLocation().pathname;
  console.log(page);
  let liStyle =
    "flex justify-start items-center mb-4 transition-all hover:text-neutral-100";
  let liIconStyle = `mr-4 text-2xl `;
  const menu = useRef(null);
  function handleMenuOpen() {
    menu.current.style = `transform: translate(0)`;
    // menu.current.classList.toggle(`-translate-x-96`);
  }
  function handleMenuClose() {
    menu.current.style = `transform: translate(-96)`;
    // menu.current.classList.toggle(`-translate-x-96`);
  }
  return (
    <>
      <BsMenuApp
        className="z-10 lg:hidden text-xl absolute top-5 left-5 text-white"
        onClick={handleMenuOpen}
      />

      <nav
        ref={menu}
        className="bg-black z-10 lg:z-0 transition-all -translate-x-96 lg:translate-x-0 lg:block w-[20rem] resize-x fixed p-6 font-semibold text-neutral-400 h-full text-sm"
      >
        <BsMenuAppFill
          className="z-20 text-xl lg:hidden absolute top-5 left-[18rem] text-white"
          onClick={handleMenuClose}
        />
        <img src={logo} alt="Logo" className="w-[55%]" />
        <ul className="mt-8">
          <li className={`${liStyle} ${page == "/" && `text-white`}`}>
            <FaHome className={liIconStyle} />
            <Link to="/" className="w-full">
              Home
            </Link>
          </li>
          <li className={`${liStyle} ${page == "/search" && `text-white`}`}>
            <FaSearch className={liIconStyle} />
            <Link to="/" className="w-full">
              Search
            </Link>
          </li>
          <li
            className={`${liStyle} ${page == "/library" && `text-white`} mb-10`}
          >
            <BiLibrary className={liIconStyle} />
            <Link to="/" className="w-full">
              Your Library
            </Link>
          </li>
          <li
            className={`${liStyle} ${
              page == "/create-playlist" && `text-white`
            }`}
          >
            <BsFillPlusSquareFill className={liIconStyle} />
            <Link to="/" className="w-full">
              Create Playlist
            </Link>
          </li>
          <li className={`${liStyle} ${page == "/liked" && `text-white`}`}>
            <BsFillSuitHeartFill className={liIconStyle} />
            <Link to="/" className="w-full">
              Liked Songs
            </Link>
          </li>
        </ul>
        <div className="h-[1px] w-full bg-neutral-700"></div>
      </nav>
    </>
  );
}
