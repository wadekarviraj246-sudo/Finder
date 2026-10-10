import madoImg from './assets/mado.png'
import hard_rock_cafeImg from './assets/hard_rock_cafe.png'
import sbarroImg from './assets/sbarro.png'
import mcdonaldsImg from './assets/mcdonalds.png'
import tacobellImg from './assets/tacobell.png'
import polo_locoImg from './assets/pollo_loco.png'
import jackImg from './assets/jack.png'
import tacotimeImg from './assets/tacotime.png'
import dominosImg from './assets/dominos.png'

function WhereToEat() {
  return (
    <div className="px-16 py-10">

      {/* Heading */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-semibold">
          Where to eat
        </h1>

        <button className="text-lg hover:text-red-500">
          View all ❯
        </button>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">

        {/* Restaurant 1 */}
        <div className="flex items-center gap-5">
          <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={madoImg} alt="Mado" className="w-20 h-16 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-8">Mado</h2>
            <p className="text-gray-600 mb-3">⭐ 4.7 <span className="text-sm">(113)</span></p>
            <p className="text-gray-600">▤ $50    &nbsp;&nbsp; 2.5km from center</p>
          </div>
        </div>

        {/* Restaurant 2 */}
        <div className="flex items-center gap-5">
          <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={hard_rock_cafeImg} alt="Hard Rock Cafe" className="w-20 h-16 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-8">Hard Rock Cafe</h2>
            <p className="text-gray-600 mb-3">⭐ 3.9 <span className="text-sm">(18)</span></p>
            <p className="text-gray-600">▤ $45    &nbsp;&nbsp; 6.2km from center</p>
          </div>
        </div>

        {/* Restaurant 3 */}
        <div className="flex items-center gap-5">
          <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={sbarroImg} alt="Sbarro" className="w-20 h-16 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-8">Sbarro</h2>
            <p className="text-gray-600 mb-3">⭐ 4.8 <span className="text-sm">(127)</span></p>
            <p className="text-gray-600">▤ $60    &nbsp;&nbsp; 5.7km from center</p>
          </div>
        </div>

        {/* Restaurant 4 */}
        <div className="flex items-center gap-5">
          <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={mcdonaldsImg} alt="McDonald's" className="w-20 h-16 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-8">McDonald's</h2>
            <p className="text-gray-600 mb-3">⭐ 4.9 <span className="text-sm">(836)</span></p>
            <p className="text-gray-600">▤ $25    &nbsp;&nbsp; 1.4km from center</p>
          </div>
        </div>

        {/* Restaurant 5 */}
        <div className="flex items-center gap-5">
          <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={tacobellImg} alt="Taco Bell" className="w-20 h-16 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-8">Taco Bell</h2>
            <p className="text-gray-600 mb-3">⭐ 4.2 <span className="text-sm">(73)</span></p>
            <p className="text-gray-600">▤ $20    &nbsp;&nbsp; 2.2km from center</p>
          </div>
        </div>

        {/* Restaurant 6 */}
        <div className="flex items-center gap-5">
          <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={polo_locoImg} alt="El Pollo Loco" className="w-20 h-16 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-8">El Pollo Loco</h2>
            <p className="text-gray-600 mb-3">⭐ 4.4 <span className="text-sm">(275)</span></p>
            <p className="text-gray-600">▤ $35    &nbsp;&nbsp; 2.3km from center</p>
          </div>
        </div>

        {/* Restaurant 7 */}
        <div className="flex items-center gap-5">
          <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={jackImg} alt="Jack Restaurant" className="w-20 h-16 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-8">Jack Restaurant</h2>
            <p className="text-gray-600 mb-3">⭐ 4.9 <span className="text-sm">(48)</span></p>
            <p className="text-gray-600">▤ $50    &nbsp;&nbsp; 1.3km from center</p>
          </div>
        </div>

        {/* Restaurant 8 */}
        <div className="flex items-center gap-5">
          <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={tacotimeImg} alt="TacoTime" className="w-20 h-16 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-8">TacoTime</h2>
            <p className="text-gray-600 mb-3">⭐ 4.6 <span className="text-sm">(179)</span></p>
            <p className="text-gray-600">▤ $25    &nbsp;&nbsp; 4.8km from center</p>
          </div>
        </div>

        {/* Restaurant 9 */}
        <div className="flex items-center gap-5">
          <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={dominosImg} alt="Domino's Pizza" className="w-20 h-16 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-8">Domino's Pizza</h2>
            <p className="text-gray-600 mb-3">⭐ 4.5 <span className="text-sm">(481)</span></p>
            <p className="text-gray-600">▤ $30    &nbsp;&nbsp; 1.7km from center</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereToEat;