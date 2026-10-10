import Navbar from './components/Navbar'
import Exploring_Barcelona from './components/Exploring_Barcelona'
import Vacation_Spots from './components/Vacation_Spots'
import Top_Offers from './components/Top_Offers'
import Events_in_Barcelona from './components/Events_in_Barcelona'
import New_in_Barcelona from './components/New_in_Barcelona'
import Where_to_Eat from './components/Where_to_Eat'
import Popular_Activities from './components/Popular_Activities'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Exploring_Barcelona />
      <Vacation_Spots />
      <Top_Offers />
      <Events_in_Barcelona />
      <New_in_Barcelona />
      <Where_to_Eat />
      <Popular_Activities />
      <Footer />
    </div>
  )
}
export default App
