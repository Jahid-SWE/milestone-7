import { Suspense, useState } from 'react'
import './App.css'
import AvailablaPlayers from './components/AvailablePlayers/AvailablaPlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
 import { ToastContainer } from 'react-toastify';

const fetchPromise = async () => {
  const res = await fetch('/players.json')
  return res.json()

}
const playersPromise = fetchPromise()


function App() {

  const [toggle, setToggle ]= useState(true)
  const [availableBalance, setAvailableBalance]=useState(150000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  console.log(purchasedPlayers);
  
  
 const removePlayer=(p)=>{
 const filterData=purchasedPlayers.filter(ply=>ply.player_name!==p.player_name)
 console.log(p)
 setPurchasedPlayers(filterData)
 setAvailableBalance(availableBalance+parseInt(p.price))
}


  return (
    <div className='bg-white min-h-screen'>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='  max-w-[1200px] mx-auto flex justify-between items-center text-black mt-5 '>
        <h1 className='text-2xl font-bold'>{toggle?'Available Player':`Selected Player (${purchasedPlayers.length}/6)`}</h1>
        <div className=' font-bold'>
          <button onClick={()=>setToggle(true)} className={`py-3 border-2 border-r-0 px-4  border-gray-300 ${toggle===true ?'bg-[#e7fe29]':''}   text-black rounded-l-2xl`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`py-3 border-2 border-l-0 px-4  border-gray-300 ${toggle===false ?'bg-[#e7fe29]':''} text-black  rounded-r-2xl`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>
      {
        toggle === true ?<Suspense fallback={<h1 className='text-black max-w-[1200px] mx-auto'><span className="loading loading-spinner text-secondary"></span> </h1>}>
    <AvailablaPlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}  playersPromise={playersPromise}  availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}
    ></AvailablaPlayers>
    </Suspense>:<SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }
      
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
