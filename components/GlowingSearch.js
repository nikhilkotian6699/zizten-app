import React from "react";

const GlowingSearch = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black px-4">
      <div className="relative p-8 sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden rounded-3xl relative p-1 bg-gray-900/80 backdrop-blur-md shadow-xl border border-gray-800">
          <form role="form" className="relative flex z-50 bg-black rounded-3xl overflow-hidden">
            <input
              type="text"
              placeholder="Enter your search here"
              className="flex-1 px-6 py-4 text-white bg-black placeholder-gray-400 focus:outline-none"
            />

            <div className="bg-gray-900 flex items-center px-4">
              <select
                id="cars"
                name="cars"
                className="bg-gray-900 text-white rounded-md px-2 py-3 focus:outline-none cursor-pointer"
              >
                <option value="volvo" className="text-black">Volvo</option>
                <option value="saab" className="text-black">Saab</option>
                <option value="mercedes" className="text-black">Mercedes</option>
                <option value="audi" className="text-black">Audi</option>
              </select>
            </div>

            <button className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-4 transition-all duration-300">
              Search
            </button>
          </form>

          {/* Matching glow styles */}
          <div className="absolute w-60 h-60 bg-violet-500 rounded-full blur-3xl opacity-20 -top-20 -left-20 z-0"></div>
          <div className="absolute w-60 h-60 bg-indigo-500 rounded-full blur-3xl opacity-20 -bottom-20 -right-20 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default GlowingSearch;
