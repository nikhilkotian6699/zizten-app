import React from "react"; 
import '@/components/GlowingSearch';

const GlowingSearch = () => {
    return(
        <div className=" flex flex-col justify-center">
        <div className="relative p-12  sm:max-w-2xl sm:mx-auto">
            <div  className="overflow-hidden z-0 rounded relative p-3">
            <form role="form" className="relative flex z-50 bg-white  rounded-full">
                
                
                <input
                    type="text"
                    placeholder="Enter your search here"
                    className="rounded flex-1 px-6 py-10 text-gray-700 focus:outline-none"
            />

           
            <div className="rounded-tl-3xl rounded-bl-3xl  hover:bg-gray-700 flex px-4 py-4 text-black ">
            <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
            </div>

            <button className="flex-1 bg-indigo-500 text-white  rounded-tr-3xl rounded-br-3xl font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
              Search
            </button>
          </form>




          <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
          <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
          <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
          <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>


        </div>
      </div>
    </div>
    );
}
export default GlowingSearch;
