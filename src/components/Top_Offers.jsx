import travel_timeImg from './assets/travel_time.jpg'
import moody_foodImg from './assets/moody_food.jpg'
import explore_worldImg from './assets/explore_world.jpg'

const Top_Offers = () => {
  return (
    <div>
      <h1 className='font-sans text-4xl font-bold ml-10 mt-6'>Top Offers</h1>
      <div className="flex gap-5 py-5 px-15">
               {/* First div */}
                  <div className="w-150 ">
                      <img src={travel_timeImg} alt="Travel Time" className="w-full h-60 object-cover rounded-lg transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" />
                  </div>
      
                  {/* Second div */}
                  <div className="w-150">
                      <img src={moody_foodImg} alt="Moody Foods" className="w-full h-60 object-cover rounded-lg transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" />
                  </div>
      
                  {/* Third div */}
                  <div className="w-150">
                      <img src={explore_worldImg} alt="Explore the World" className="w-full h-60 object-cover rounded-lg transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" />
                  </div>
              </div>
    </div>
  )
}

export default Top_Offers
