import React from "react";

const Home = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/bkg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main desktop mockup */}
      <div className="relative w-[900px] h-[520px] bg-white/80 rounded-3xl shadow-2xl flex flex-col items-center justify-center border border-gray-200 max-lg:w-[95vw] max-lg:h-[400px] max-md:hidden">
        {/* Calendar mockup */}
        <div className="absolute left-8 top-8 w-40 bg-white rounded-xl shadow p-3 flex flex-col items-center">
          <div className="font-bold text-lg mb-2">September</div>
          <div className="grid grid-cols-7 gap-1 text-xs text-gray-500">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-indigo-100 cursor-pointer">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Calendar grid */}
        <div className="absolute left-40 top-16 right-40 bottom-16 bg-white rounded-2xl shadow-inner flex flex-col">
          <div className="flex justify-between items-center px-6 py-2 border-b">
            <span className="font-semibold text-gray-700">Week</span>
            <span className="text-gray-400 text-sm">Search</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-gradient-to-r from-indigo-400 to-blue-400 text-white px-6 py-2 rounded-xl shadow-lg font-semibold">Focus Time</div>
          </div>
        </div>
        {/* App dock */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
          <span className="text-3xl">📝</span>
          <span className="text-3xl">📅</span>
          <span className="text-3xl">🗑️</span>
          <span className="text-3xl">🎵</span>
        </div>
        {/* Cat lamp */}
        <div className="absolute left-[-80px] bottom-0 w-32 h-32 bg-orange-200 rounded-full flex items-center justify-center shadow-lg border-4 border-orange-300">
          <span className="text-5xl">😺</span>
        </div>
        {/* Weather widget */}
        <div className="absolute right-[-60px] top-32 w-32 bg-white rounded-2xl shadow p-3 flex flex-col items-center">
          <span className="text-2xl">⛅</span>
          <span className="font-bold text-lg">68°</span>
          <span className="text-xs text-gray-500">NYC</span>
        </div>
        {/* Book stack */}
        <div className="absolute right-[-40px] bottom-0 flex flex-col gap-1 items-center">
          <div className="w-12 h-6 bg-yellow-400 rounded shadow" />
          <div className="w-10 h-6 bg-red-400 rounded shadow" />
          <div className="w-14 h-6 bg-blue-400 rounded shadow" />
        </div>
        {/* Notification */}
        <div className="absolute right-24 top-4 bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2">
          <span className="text-xl">🔔</span>
          <span className="text-xs text-gray-700">EOD Sync 5:30PM</span>
        </div>
      </div>
      {/* Tablet/mobile fallback: stack or hide elements */}
      <div className="w-full flex flex-col items-center justify-center p-4 gap-6 md:hidden">
        <div className="w-full max-w-md bg-white/80 rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Calendar</span>
            <span className="text-xs text-gray-400">68° ⛅ NYC</span>
          </div>
          <div className="bg-gradient-to-r from-indigo-400 to-blue-400 text-white px-4 py-2 rounded-xl shadow-lg font-semibold text-center">Focus Time</div>
        </div>
      </div>
    </div>
  );
};

export default Home; 