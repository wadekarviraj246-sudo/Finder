import { useState } from "react";
import simon_blueImg from "./assets/simon_blue_concert.jpg";
import palau_sanImg from "./assets/palau_san.jpg";

function Carousel() {
  const [slide, setSlide] = useState(1);

  return (
    <div className="mt-10 relative w-full max-w-4xl mx-auto">
      <img src={slide === 1 ? simon_blueImg : palau_sanImg}
        className="w-full h-[450px] object-cover rounded-xl"
        alt="Concert"
      />

      {/* Text on image */}
      <div className="absolute top-10 left-10 text-black">
        <p className="text-lg mb-4">📅 Nov 15 ◷ 19:00</p>
        <h1 className="text-4xl font-bold mb-8">
          {slide === 1 ? "Simon Blues Concert" : "Palau San Concert"}
        </h1>

        <button className="bg-red-500 hover:bg-red-600 transition text-white text-lg font-semibold px-8 py-4 rounded-full transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">
          Tickets from $60 ❯
        </button>
      </div>

      {/* Next Slide */}
      <button
        onClick={() => setSlide(slide === 1 ? 2 : 1)}
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 ml-100 transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" >
        More Events
      </button>
    </div>
  );
}

export default Carousel;