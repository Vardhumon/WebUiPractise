import Background12 from "./assets/Background1.jpg";
import AlphabetD from "./assets/AlphabetD.png";
import Mask1 from "./assets/Mask1.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";
import Planet1 from "./assets/planet1.png"
import Planet2 from "./assets/planet2.png"
import MapBase from "./assets/MapBase.png"
import MaskGlow1 from "./assets/MaskGlow1.png"
import MaskGlow2 from "./assets/MaskGlow2.png"
import MaskGroup1 from "./assets/MaskGroup1.png"
import MaskGroup2 from "./assets/MaskGroup2.png"
import Profile1 from "./assets/Profile1.png"
import Profile2 from "./assets/Profile2.png"
import Profile3 from "./assets/Profile3.png"
import GlowProfile3 from "./assets/GlowProfile3.png"
import GlowProfile2 from "./assets/GlowProfile2.png"
import GlowProfile1 from "./assets/GlowProfile1.png"
import CardIn1 from "./assets/CardIn1.png"
import CardIn2 from "./assets/CardIn2.png"
import CardIn3 from "./assets/CardIn3.png"
import Samantha from "./assets/Samantha.png"
import SocialIcons from "./assets/SocialIcons.png"

import UnionIcon from "./assets/Union.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars, faArrowDown, faVrCardboard, faPhotoVideo, faArrowRightToFile, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

      <header className="w-full relative top-7 font-bold text-white lg:text-9xl md:text-5xl text-center pt-32 z-10">
        <h1 className="z-10">METAVERSE</h1>
        <div className="relative flex items-baseline justify-center z-10">
          <h1>MA</h1>
          <span className="ps-2">
            <img src={AlphabetD} alt="Alphabet D" className="lg:w-44 md:w-16" height="108px" />
          </span>
          <h1>NESS</h1>
        </div>
      </header>

      <div className="relative left-2/3 transform -translate-x-1/2 top-0 mt-0 overflow-hidden">
        <img src={Mask1} alt="Mask" className="md:w-[900px] lg:w-[1370px]" />
      </div>

      <section className="text-white pt-28 text-lg lg:text-4xl md:text-2xl font-thin px-10 md:px-40 text-center leading-relaxed">
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

      <section className="md:text-4xl lg:text-7xl font-bold text-center text-white overflow-hidden mt-10">
        <p>Choose the world you want to explore</p>
      </section>

      {/* Cards */}
      <div className="px-5 md:px-40 my-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 h-36">
          <div className="col-span-1 bg-transparent rounded-xl p-4">
            <img src={card1} alt="Card 1" className="w-full h-full object-cover rounded-2xl" />
            <p className="relative -rotate-90 text-white bottom-20 md:text-xl lg:text-4xl text-nowrap lg:ps-10 md:ps-1 font-semibold">The Hogwarts</p>
          </div>
          <div className="col-span-1 sm:col-span-2 bg-transparent rounded-xl p-4">
            <img src={card2} alt="Card 2" className="w-full h-full object-cover rounded-2xl" />
            <div className="relative text-white lg:bottom-40 md:bottom-36 text-nowrap lg:ps-10 md:ps-2 font-semibold" >
              <div className="rounded-full lg:w-12 md:w-10 lg:p-3 md:p-1 text-center" style={{backgroundColor:"#cc6aa6"}}>
              <FontAwesomeIcon icon={faVrCardboard} className="" />
              </div>
              <p className="lg:pb-6 md:pb-2 bottom-36 md:text-sm">Enter Metaverse</p>
              <p className="relativetext-white lg:text-3xl md:text-xl text-nowrap font-semibold bottom-20">The Upside Down</p>
            </div>
          </div>
          <div className="col-span-1 bg-transparent rounded-xl p-4">
            <img src={card3} alt="Card 3" className="w-full h-full object-cover rounded-2xl" />
            <p className="relative -rotate-90 text-white bottom-20 md:text-xl lg:text-4xl text-nowrap lg:ps-10 md:ps-1 font-semibold">Kadirojo Permai</p>
          </div>
          <div className="col-span-1 bg-transparent rounded-xl p-4">
            <img src={card4} alt="Card 4" className="w-full h-full object-cover rounded-2xl" />
            <p className="relative -rotate-90 text-white bottom-20 md:text-xl lg:text-4xl text-nowrap lg:ps-10 md:ps-1 font-semibold">Paradise Island</p>

          </div>
          <div className="col-span-1 bg-transparent rounded-xl p-4">
            <img src={card5} alt="Card 5" className="w-full h-full object-cover rounded-2xl" />
            <p className="relative -rotate-90 text-white bottom-20 md:text-xl lg:text-4xl text-nowrap lg:ps-10 md:ps-1 font-semibold">Hawkins Labs</p>

          </div>
        </div>
      </div>

      {/* Working */}
      <div className="lg:mt-80 mt-40 w-11 h-3 "></div>
        <div className="flex lg:mt-96 md:mt-60 h-1/2 ">
          <div className="w-1/2 ps-10 ">
              <img className="z-10 relative" src={Planet1}/>
              <div className=" z-0 lg:w-[600px] md:w-[500px] p-10 h-60 bg-[#31416a] relative lg:bottom-96 md:bottom-56  left-2 rounded-full opacity-35 rotate-3" ></div>
          </div>
          <div className="w-1/12 me-20"></div>
          <div className="w-1/3 mt-16 text-white flex flex-col items-start ">
            <div className="px-6 font-semibold text-left "><p className="lg:text-7xl md:text-4xl text-wrap">Get started with just a few clicks</p></div>
            <div className="mt-10 px-6">
                <div className="flex flex-col gap-12">
                <div className="flex gap-2 items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#2c3540] py-3 flex justify-center items-center"><p className="text-center">01</p></div>
                <p className="lg:text-xl md:text-lg font-thin text-wrap">Find a world that suits you and you want to enter</p>
            </div>
            <div className="flex gap-2 items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#2c3540] py-3 flex justify-center items-center"><p className="text-center">02</p></div>
                <p className="lg:text-xl md:text-lg font-thin text-wrap">Enter the world by reading basmalah to be safe</p>
            </div>
            <div className="flex gap-2 items-center">
                <div className="w-20 h-14 rounded-2xl bg-[#2c3540] py-3 flex justify-center items-center"><p className="text-center">03</p></div>
                <p className="lg:text-xl md:text-lg font-thin text-wrap">No need to beat around the bush,just stay on the gas and have fun</p>
            </div>
                </div>
            </div>
          </div>
      </div>

      {/* whats New */}
      <div className="flex mt-10">
        <div className="w-1/2 ms-20">
          <div><span className="text-7xl font-semibold text-white">What's new about Metaversus?</span></div>
          <div className="flex gap-16 justify-start items-start">
            <div className="w-52 text-white flex flex-col gap-2 justify-start items-start mt-16">
                <div className="w-20 h-14 rounded-2xl bg-[#2c3540] py-3 flex justify-center items-center"><p className="text-center"><FontAwesomeIcon icon={faPhotoVideo} /></p></div>
                <div><p className="text-xl font-semibold">A new World</p></div>
                <p className="w-56 text-xl font-thin text-wrap">No need to beat around the bush,just stay on the gas and have fun</p>
            </div>
            <div className="w-52 text-white flex flex-col gap-2 justify-start items-start mt-16">
                <div className="w-20 h-14 rounded-2xl bg-[#2c3540] py-3 flex justify-center items-center"><p className="text-center"><FontAwesomeIcon icon={faVrCardboard} /></p></div>
                <div><p className="text-xl font-semibold">More realistic</p></div>
                <p className="w-64 text-xl font-thin text-wrap">In the latest update, your eyes are narrow, making the world more realistic than ever</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
        <img src= {Planet2} />
        </div>
      </div>

    {/* People on the world */}
    <div className=" h-2/3">
      <div className="px-48 text-center text-white">
        <p className="text-7xl font-semibold">Track friends around you and invite them to play together in the same world</p>
      </div>
      <div>
        <div className="px-36 ms-8">
            <img src={MapBase}/> 
            <div className="relative bottom-96  transform -translate-y-20 translate-x-28 w-20 flex flex-col items-center">
              <img src={UnionIcon}></img>
              <img src ={Profile2} className="-translate-y-20 bottom-1 w-11 z-20" />  
              <img src={GlowProfile2} className="-translate-y-16 w-8 z-10" />
           </div>
           <div className="relative bottom-60 transform -translate-y-48 -translate-x-52 flex flex-col items-center">
            <div className="w-56 h-40 bg-[#2e3946] z-0 rounded-3xl flex justify-start text-white">
                <img className="p-2 z-0" src={MaskGroup1} />
                <div className="relative z-10 pt-20 ps-1 -translate-x-52 ">
                  <div className="w-36 flex justify-end items-center z-10">
                    <div className="w-80 flex z-10">
                        <img src={Profile1} className="w-6 z-20"/>
                        <img src={Profile2} className="w-6 -translate-x-3 z-10"/>
                        <img src={Profile3} className="w-6 -translate-x-6"/>
                    </div>
                    <div className="text-xs text-nowrap" >+264 Have joined</div>
                  </div>
                  <div className="text-xl font-semibold text-nowrap" >The Upside Down</div>
                </div>
                <img src={MaskGlow1} className="relative scale-150 -translate-x-96 opacity-75"/> 
            </div>
            <div className="relative bottom-36 transform -translate-y-20 translate-x-44 w-20 flex flex-col items-center">
                    <img src={UnionIcon}></img>
                    <img src ={Profile1} className="-translate-y-20 bottom-1 w-11 z-20" />  
                    <img src={GlowProfile1} className="-translate-y-16 w-8 z-10" />
            </div>
           
            <div className="relative bottom-36 transform -translate-y-32 translate-x-96 ms-96 left-20 w-20 flex flex-col items-center">
                    <img src={UnionIcon}></img>
                    <img src ={Profile3} className="-translate-y-20 bottom-1 w-11 z-20" />  
                    <img src={GlowProfile3} className="-translate-y-16 w-8 z-10" />
            </div>
             
           </div>
           
        </div>
      </div>
    </div>


    {/* insights about metaverse */}
    <div className="flex flex-col gap-3 px-20">
      <div className="mx-auto text-7xl font-semibold text-white">Insight About Metaverse</div>
        <div className="flex gap-4 mt-20 px-32 justify-around items-center">
            <img className= "w-60"src={CardIn1}/>
            <div className="text-white w-2/3 px-10">
                <p className="text-4xl font-medium">The launch of the Metaverse makes Elon musk ketar-ketir</p>
                <p className="font-light text-xl">Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.</p>
            </div>
            <div className="bg-transparent w-40 h-40 rounded-full border border-white text-white text-center flex justify-center items-center">
                <FontAwesomeIcon icon={faArrowRight} className="w-32 h-24 font-thin -rotate-45" />
            </div>
        </div>
        <div className="flex gap-4 mt-10 px-32 justify-around items-center">
            <img className= "w-60"src={CardIn2}/>
            <div className="text-white w-2/3 px-10">
                <p className="text-4xl font-medium">7 tips to easily master the madness of the Metaverse</p>
                <p className="font-light text-xl">Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum</p>
            </div>
            <div className="bg-transparent w-40 h-40 rounded-full border border-white text-white text-center flex justify-center items-center">
                <FontAwesomeIcon icon={faArrowRight} className="w-32 h-24 font-thin -rotate-45" />
            </div>
        </div>
        <div className="flex gap-4 mt-10 px-32 justify-around items-center">
            <img className= "w-60"src={CardIn3}/>
            <div className="text-white w-2/3 px-10">
                <p className="text-4xl font-medium">With one platform you can explore the whole world virtually</p>
                <p className="font-light text-xl">Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem</p>
            </div>
            <div className="bg-transparent w-40 h-40 rounded-full border border-white text-white text-center flex justify-center items-center">
                <FontAwesomeIcon icon={faArrowRight} className="w-32 h-24 font-thin -rotate-45" />
            </div>
        </div>
    </div>




    {/* samantha founder  */}
    <div className="flex gap-4 mx-auto px-52 mt-44  ">
      <div className="text-white p-4 pb-7 flex flex-col justify-end gap-y-5  w-1/3 border border-white rounded-3xl bg-[#2c2f4a] backdrop-blur-xl bg-opacity-45">
        <p className="text-4xl font-semibold">Samantha</p>
        <p className="text-lg font-normal">Founder Metaversus</p>
        <p className="text-xl font-thin leading-loose">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
      </div>
      <div className="w-2/3"><img src={Samantha} /></div>
    </div>


    {/* Footer */}
      <div className="px-32 mx-auto mt-44">
          <div className="flex gap-4 text-white justify-between">
           <div className="font-bold text-6xl ">ENTER THE METAVERSE</div>
            <div className="w-56 h-16 rounded-full flex gap-1 justify-center items-center text-white bg-[#25618b]">
              <FontAwesomeIcon icon={faVrCardboard}/>
              <p className="capitalize">ENTER METAVERSE</p>
           </div>
          </div>
          <div className="w-12/12 h-1 mt-10 bg-white mb-10"></div>
          <div className="flex justify-between items-center text-white mb-32">
              <p className="font-bold text-5xl">Metaversus</p>
              <p className="font-thin">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
              <img src={SocialIcons} />
          </div>
      </div>
    </div>
  );
}
