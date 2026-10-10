import { useState } from "react";

import barcelon_aquariumImg from './assets/barcelona_aquarium.jpg'
import jardinet_restaurantImg from './assets/jardinet_restaurant.jpg'

function BarcelonaCarousel() {
  const [slide, setSlide] = useState(1);

  return (
    <div className="px-10 py-8">
      <h1 className="text-4xl font-semibold mb-10">What's new in Barcelona</h1>

      <div className="flex items-center gap-20">
        {/* Left side - Image */}
        <img
          src={slide === 1 ? barcelon_aquariumImg : jardinet_restaurantImg}
          alt="Barcelona Oceanarium"
          className="w-1/2 h-[540px] object-cover rounded-lg"
        />

        {/* Right side - Details */}
        <div className="flex-1">

          {/* Previous and Next buttons */}
          <div className="flex gap-3 mb-10">
            <button onClick={() => setSlide(slide === 1 ? 2 : 1)}
            className="w-12 h-12 border rounded-full hover:bg-gray-100"
            > ❮ </button>
            <button
              onClick={() => setSlide(slide === 1 ? 2 : 1)}
              className="w-12 h-12 border rounded-full hover:bg-gray-100"
            >  ❯ </button>
          </div>

          <h2 className="text-4xl font-semibold mb-5">
            {slide === 1
              ? "Barcelona Oceanarium"
              : "Jardinet D'Aribau Restaurant"}
          </h2>

          <p className="text-gray-500 mb-6">
            ⭐ {slide === 1 ? "4.7 (8325)　 ▤ $40　 ♧ 1.8 km from center" :
              "4.9 (597)　 ▤ $60　 0.3 km from center"}
          </p>

          <p className="text-lg text-gray-600 leading-8 mb-8">
            {slide === 1
              ? "Enter the world of aquatic discovery at one of the biggest aquariums in Europe, featuring a 5 million liter main tank and thousands of sea reatures from all over the world. Marvel at the mesmerizing dance of stingrays, the graceful glide of sea turtles, and the vibrant colors of tropical fish."
              : "Experience authentic Mediterranean flavours at Jaardinet D'Aribau, a charming restaurant in the heart of Barcelona. With a focus on quality and creativity, Jardinet D'Aribau offers a diverse menu that blends traditonal Meditarranean cuisine with modern culinary techniques. Perfect for a memorable dining experience!"}
          </p>
          <button className="bg-red-500 hover:bg-red-600 transition text-white font-semibold px-8 py-4 rounded-full transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">
            View more ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default BarcelonaCarousel;