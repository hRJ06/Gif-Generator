import {useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
export default function Tag() {  
  const [tag,setTag] = useState('cat');
  const {gif,loading,fetchData} = useGif(tag);
  function clickHandler(){
    fetchData();
  }
  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className="flex flex-col gap-4 py-4 justify-center items-center w-full lg:w-1/2 overflow-hidden aspect-auto bg-blue-400 border-2 border-gray-500 rounded-2xl">
      <h1 className="uppercase underline font-bold md:text-2xl text-xl text-center">Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src = {gif} width={450}></img>)
      }
      <div className="w-full flex flex-col items-center">
        <input type="text" className="md:w-4/5 w-2/3 text-center rounded-md border border-gray-300 px-3 py-2 focus:z-10 text-sm lg:text-lg" onChange={changeHandler} value={tag}></input>
        <button onClick={clickHandler} className="uppercase w-4/5 py-2 bg-white/70 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center">Generate</button>
      </div>
    </div>
  );
}
