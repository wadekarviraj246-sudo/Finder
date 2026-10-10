import barcelona_zooImg from './assets/barcelona_zoo.jpg'
import mountain_lakeImg from './assets/mountain_lake.jpg'
import jepsyImg from './assets/jepsy.jpg'
import art_designImg from './assets/art_design.jpg'

const Popular_Activities = () => {
  return (
    <div>
      <h1 className='font-sans text-4xl font-bold ml-10 mt-6'>Popular Activities</h1>
      <div className="flex gap-5 py-5 px-15">
               {/* First div */}
                  <div className="w-150 transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">
                      <img src={barcelona_zooImg} alt="Zoo" className="w-full h-60 object-cover rounded-lg " />
                      <h2 className="text-lg font-bold mt-2 pb-2 pl-2 hover:underline underline-offset-8">Barcelona National Zoo</h2>
                      <p className='pl-2'>Discover fascination animals and a fun-filled adventure for whole family</p>
                      <p className="text-sm text-gray-500 pt-2 pl-2">⭐ 4.9 &nbsp;&nbsp;&nbsp; $$$ &nbsp;&nbsp;&nbsp; 0.8km from center</p>
                  </div>
      
                  {/* Second div */}
                  <div className="w-150 transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">
                      <img src={mountain_lakeImg} alt="Mountains" className="w-full h-60 object-cover rounded-lg transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" />
                      <h2 className="text-lg font-bold mt-2 pb-2 pl-2 hover:underline underline-offset-8">Moutain Lake Tour</h2>
                      <p className='pl-2'>Enjoy breathtaking views, fresh air, and a peaceful escape into the wilderness.</p>
                      <p className="text-sm text-gray-500 pt-2 pl-2">⭐ 4.5 &nbsp;&nbsp;&nbsp; $$$ &nbsp;&nbsp;&nbsp; 13km from center</p>
                  </div>
      
                  {/* Third div */}
                  <div className="w-150 transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">
                      <img src={jepsyImg} alt="Beach" className="w-full h-60 object-cover rounded-lg transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" />
                      <h2 className="text-lg font-bold mt-2 pb-2 pl-2 hover:underline underline-offset-8">Jepsy Tour with 4x4 Cab</h2>
                      <p className='pl-2'>Explore the wild side of barcelone with our reliable off-roading 4x4 vehicle</p>
                      <p className="text-sm text-gray-500 pt-2 pl-2">⭐ 4.7 &nbsp;&nbsp;&nbsp; $$$ &nbsp;&nbsp;&nbsp; 9.8km from center</p>
                  </div>

                  {/* Fourth div */}
                  <div className="w-150 transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">
                      <img src={art_designImg} alt="Beach" className="w-full h-60 object-cover rounded-lg transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" />
                      <h2 className="text-lg font-bold mt-2 pb-2 pl-2 hover:underline underline-offset-8">Arts & Design Museum</h2>
                      <p className='pl-2'>Europe's most extensive collection of comtemporary art!</p>
                      <p className="text-sm text-gray-500 pt-2 pl-2">⭐ 4.9 &nbsp;&nbsp;&nbsp; $$$ &nbsp;&nbsp;&nbsp; 1.4km from center</p>
                  </div>
              </div>
    </div>
  )
}

export default Popular_Activities
