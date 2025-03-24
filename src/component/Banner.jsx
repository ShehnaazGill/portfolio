const Banner = () => {
    return (
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?shopping,store')" }}>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black"></div>
  
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Biggest Sale of the Season!
          </h1>
          <p className="text-lg md:text-xl mb-6">Get up to 50% off on selected items.</p>
          <a href="#" className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
            Shop Now
          </a>
        </div>
  
      </div>
    );
  };
  
  export default Banner;
  