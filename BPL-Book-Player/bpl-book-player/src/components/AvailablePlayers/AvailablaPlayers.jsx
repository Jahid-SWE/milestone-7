import React, { use } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'

const AvailablaPlayers = ({ playersPromise,setAvailableBalance,availableBalance, purchasedPlayers, setPurchasedPlayers}) => {
  const playersData = use(playersPromise)

  return (
    <div className='max-w-[1200px] mx-auto text-black grid sm:grid-cols-1 md:grid-cols-3 '>

      {
        playersData.map((player, index) =><PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} key={index} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} player={player}  ></PlayerCard>)
      }

    </div>
  )
}

export default AvailablaPlayers