import pin_cottageImg from './assets/pin_cottage.jpg'
import studio_apartmentImg from './assets/studio_apartment.jpg'

const Vacation_Spots = () => {
  return (
    <div>
      <h1 className='font-sans text-4xl font-bold ml-10 mt-6'>Popular Vacation Spots</h1>
      <div className="flex gap-5 py-5 px-15">
         {/* First div */}
            <div className="w-150 ">
                <img src={pin_cottageImg} alt="Nature" className="w-full h-60 object-cover rounded-lg transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" />
                <h2 className="text-lg font-bold mt-2">Pin Cottage</h2>
                <p className="text-sm text-gray-500">⭐ 4.9 &nbsp;&nbsp;&nbsp; $$$ &nbsp;&nbsp;&nbsp; 0.8km from center</p>
            </div>

            {/* Second div */}
            <div className="w-150">
                <img src={studio_apartmentImg} alt="Mountains" className="w-full h-60 object-cover rounded-lg transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" />
                <h2 className="text-lg font-bold mt-2">Cyrstal Studio Apartment</h2>
                <p className="text-sm text-gray-500">⭐ 4.5 &nbsp;&nbsp;&nbsp; $$$ &nbsp;&nbsp;&nbsp; 2.4km from center</p>
            </div>

            {/* Third div */}
            <div className="w-150">
                <img src={studio_apartmentImg} alt="Beach" className="w-full h-60 object-cover rounded-lg transition hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out" />
                <h2 className="text-lg font-bold mt-2">Cyrstal Studio Apartment</h2>
                <p className="text-sm text-gray-500">⭐ 4.7 &nbsp;&nbsp;&nbsp; $$$ &nbsp;&nbsp;&nbsp; 1.3km from center</p>
            </div>
        </div>
    </div>
  )
}

export default Vacation_Spots
