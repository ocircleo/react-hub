import { Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import JustForyou from "./components/JustForyou";
import { useEffect, useState } from "react";


const Home = () => {
  
    return (
        <div className="lg:w-[65rem] w-full mx-auto mt-5 px-2 ">
            <Welcome></Welcome>
            <h1 className="text-2xl font-semibold px-1  py-8 underline decoration-gray-400 decoration-4 underline-offset-[10px]">Just for you</h1>
            <JustForyou></JustForyou>
        </div >

    );
};

export default Home;