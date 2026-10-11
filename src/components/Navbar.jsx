const Navbar = () => {
  return (
    <nav className="w-full h-24 bg-white border-b border-gray-100">
      <div className="max-w-[1650px] mx-auto h-full px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">⌕</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Finder</h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          {/* Home */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-lg hover:bg-gray-100 rounded-full transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out"> Home</button>

          {/* Listings */}
          <button className="flex items-center gap-2 px-5 py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-full transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">Listings</button>

          {/* Account */}
          <button className="flex items-center gap-2 px-5 py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-full transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out"> Account</button>

          {/* Pages */}
          <button className="flex items-center gap-2 px-5 py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-full transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">Pages</button>

          {/* Docs */}
          <button className="px-5 py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-full transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">Docs</button>

          {/* Components */}
          <button className="px-5 py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-full transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out"> Components </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-7">

          {/* Theme */}
          <button className="text-2xl text-gray-800 hover:text-red-500 hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out"> ☀️ </button>

          {/* User */}
          <button className="text-2xl text-gray-800 hover:text-red-500 hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out"> 👤 </button>

          {/* Add Business */}
          <button className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg px-6 py-3.5 rounded-full hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">
            <span className="text-2xl font-light">  + </span> Add business
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;