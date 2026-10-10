

const Footer = () => {
  return (
    <div className="bg-black flex gap-6 h-90 pt-10">
        <div className="ml-30">
            <h1 className="text-3xl font-bold text-white ml-6 pb-5">Finder</h1>
            <p className="text-white ml-6 text-l pb-3 hover:underline underline-offset-4">✉️ contact@gmail.com</p>
            <p className="text-white ml-6 text-l pb-3 hover:underline underline-offset-4">📞 +1 50 537 53 082</p>
        </div>

        <div className="ml-20">
            <h1 className="text-3xl font-bold text-white ml-6 pb-5">Quick Links</h1>
            <ul className="text-white">
              <li className="pt-2 pb-1.5 ml-7 hover:underline underline-offset-4">Top Cities</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Accomodation</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Cafe & Restaurants</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Night Clubs</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Events & Meetups</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Beauty Salons</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Pharmacies</li>
            </ul>
        </div>

        <div className="ml-20">
            <h1 className="text-3xl font-bold text-white ml-6 pb-5">Profile</h1>
            <ul className="text-white">
              <li className="pt-2 pb-1.5 ml-7 hover:underline underline-offset-4">My Account</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">My Listings</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Gift Cards</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Help Center</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Taxes & Fee</li>
              <li className="pb-1.5 ml-7 hover:underline underline-offset-4">Privacy Policy</li>
            </ul>
        </div>

        <div className="ml-20">
            <h1 className="text-3xl font-bold text-white ml-6 pb-5">Subscribe for our newsletter</h1>
             <input type='text' placeholder='Your Mail' className='w-80 h-10 px-4 py-5 ml-6 border border-gray-300 rounded-full text-white' /><br />
             <button className="w-80 h-10 rounded-full bg-red-500 mt-3 ml-6 text-white transition hover:bg-red-700 hover:-translate-y-1 hover:scale-100 hover:transition duration-300 ease-in-out">Subscribe</button>
        </div>
      
    </div>
  )
}

export default Footer
