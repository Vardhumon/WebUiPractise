import Background12 from "./assets/Background1.jpg";
import AlphabetD from "./assets/AlphabetD.png";
import Mask1 from "./assets/Mask1.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";
import Planet1 from "./assets/planet1.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars, faArrowDown, faVrCardboard } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="w-screen h-[1500px] bg-hero-pattern bg-cover bg-repeat overflow-x-hidden">
      <nav className="w-11/12 md:w-3/4 pt-5 px-10 mx-auto flex justify-between items-center">
        <div>
          <FontAwesomeIcon className="text-white font-thin" icon={faMagnifyingGlass} />
        </div>
        <div className="text-white font-bold text-2xl">METAVERSUS</div>
        <div>
          <FontAwesomeIcon className="text-white" icon={faBars} />
        </div>
      </nav>

      <header className="w-full relative top-7 font-bold text-white text-5xl md:text-9xl text-center pt-32 z-10">
        <h1 className="z-10">METAVERSE</h1>
        <div className="relative flex items-baseline justify-center z-10">
          <h1>MA</h1>
          <span className="ps-2">
            <img src={AlphabetD} alt="Alphabet D" width="180px" height="108px" />
          </span>
          <h1>NESS</h1>
        </div>
      </header>

      <div className="relative left-2/3 transform -translate-x-1/2 top-0 mt-0 overflow-hidden">
        <img src={Mask1} alt="Mask" className="max-w-full" width="1370px" />
      </div>

      <section className="text-white pt-28 text-lg md:text-4xl font-thin px-10 md:px-40 text-center leading-relaxed">
        <p>
          <span className="font-semibold">Metaverse</span> is a new thing in the future,
          where you can enjoy the virtual world by feeling like it's really real,
          you can feel what you feel in this metaverse world, because this is
          really the <span className="font-semibold">madness of the metaverse</span> of today,
          using only <span className="font-semibold">VR</span> devices you can easily explore the metaverse world
          you want, turn your dreams into reality. Let's <span className="font-semibold">explore</span> the madness of the metaverse by scrolling down.
        </p>
      </section>

      <div className="text-center mt-5">
        <FontAwesomeIcon icon={faArrowDown} className="text-white text-2xl h-8" />
      </div>

      <section className="text-3xl md:text-7xl font-bold text-center text-white overflow-hidden mt-10">
        <p>Choose the world you want to explore</p>
      </section>

      {/* Cards */}
      <div className="px-5 md:px-40 my-10 mb-44">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 h-36">
          <div className="col-span-1 bg-transparent rounded-xl p-4">
            <img src={card1} alt="Card 1" className="w-full h-full object-cover rounded-2xl" />
            <p className="relative -rotate-90 text-white bottom-20 text-4xl text-nowrap ps-10 font-semibold">The Hogwarts</p>
          </div>
          <div className="col-span-1 sm:col-span-2 bg-transparent rounded-xl p-4">
            <img src={card2} alt="Card 2" className="w-full h-full object-cover rounded-2xl" />
            <div className="relative text-white bottom-40 text-nowrap ps-10 font-semibold" >
              <div className="rounded-full w-12 p-3 text-center" style={{backgroundColor:"#cc6aa6"}}>
              <FontAwesomeIcon icon={faVrCardboard} />
              </div>
              <p className="pb-6 bottom-36">Enter Metaverse</p>
              <p className="relativetext-white text-3xl text-nowrap font-semibold bottom-20">The Upside Down</p>
            </div>
          </div>
          <div className="col-span-1 bg-transparent rounded-xl p-4">
            <img src={card3} alt="Card 3" className="w-full h-full object-cover rounded-2xl" />
            <p className="relative -rotate-90 text-white bottom-20 text-4xl text-nowrap ps-10 font-semibold">Kadirojo Permai</p>
          </div>
          <div className="col-span-1 bg-transparent rounded-xl p-4">
            <img src={card4} alt="Card 4" className="w-full h-full object-cover rounded-2xl" />
            <p className="relative -rotate-90 text-white bottom-20 text-4xl text-nowrap ps-10 font-semibold">Paradise Island</p>

          </div>
          <div className="col-span-1 bg-transparent rounded-xl p-4">
            <img src={card5} alt="Card 5" className="w-full h-full object-cover rounded-2xl" />
            <p className="relative -rotate-90 text-white bottom-20 text-4xl text-nowrap ps-10 font-semibold">Hawkins Labs</p>

          </div>
        </div>
      </div>

      {/* Working */}
      <div className="mt-96 w-11 h-3"></div>
      <div className="flex mt-96">
          <div className="w-1/2 ps-10"><img src={Planet1}/></div>
          <div className="w-1/2 mt-10 text-white  ">
            <div className="px-24 font-semibold text-left "><p className="text-7xl text-wrap">Get started with just a few clicks</p></div>
            <div className="mt-10 px-24">
            <div className="flex gap-2 items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#2c3540] py-3 flex justify-center items-center"><p className="text-center">01</p></div>
                <p className="text-xl font-thin ps-3 text-wrap bg-red-50">Find a world that suits you and you want to enter</p>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}
