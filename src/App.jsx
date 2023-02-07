import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicPlayer from "./Components/MusicPlayer/index";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";

function App() {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <main className="h-screen flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Controls /> */}
      {activeSong?.title && (
        <div className="fixed w-full bottom-0 bg-[#181818] left-0 right-0 flex justify-between items-center p-3">
          <MusicPlayer />
        </div>
      )}
    </main>
  );
}

export default App;
