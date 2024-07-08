import { useState } from "react"
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import "./index.css"

const App=()=>{
  let heroData=[
    {text1:"Dive Into",text2:"What you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"Your Passions"},
  ]
  const [heroCount,setHeroCount]=useState(2);
  const [playStatus,setPlayStatus]=useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>

     <Navbar/>
     <Hero
     
     setPlayStatus={setPlayStatus}
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}
     />
    </div>
  )
}
export default App
