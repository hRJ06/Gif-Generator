import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {  
  const {gif,loading,fetchData} = useGif('');
  function clickHandler(){
    fetchData();
  }
  return (
    <div className="flex flex-col gap-4 py-4 justify-center items-center w-full lg:w-1/2 overflow-hidden aspect-auto bg-green-400 border-2 border-gray-500 rounded-2xl">
      <h1 className="uppercase underline font-bold md:text-2xl text-xl text-center">A Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src = {gif} width={450} alt = ""></img>)
      }
      <button onClick={clickHandler} className="uppercase w-4/5 py-2 bg-white/70 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center">Generate</button>
    </div>
  );
}
