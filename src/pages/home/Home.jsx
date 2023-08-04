import Welcome from "./components/Welcome";
import JustForyou from "./components/JustForyou";



const Home = () => {
  
    return (
        <div className="lg:w-[55rem] xl:w-[65rem] w-full mx-auto mt-5 px-2 ">
            <Welcome></Welcome>
            <JustForyou></JustForyou>
        </div >

    );
};

export default Home;