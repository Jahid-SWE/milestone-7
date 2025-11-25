import React, { useState } from 'react'
import man from '../../assets/man.png'
import flag from '../../assets/flag.png'
import { toast } from 'react-toastify'

const PlayerCard = ({player, setAvailableBalance,availableBalance,purchasedPlayers, setPurchasedPlayers}) => {
    const [isSelected, setIsSelected]=useState(false)
    
    const handleSelected=(playerData)=>{
        const playerPrice= parseInt(playerData.price)
        if(availableBalance<playerPrice){
            toast("You Don't have enough price")
            return
        }
        if(purchasedPlayers.length===6){
            toast("Your Maximum limit 6 player to Parchase")
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance-playerPrice);
        setPurchasedPlayers([...purchasedPlayers, playerData])
    }
    return (
        <div className="card bg-white  shadow-sm p-4">
            <figure>
                <img className='rounded-2xl w-full h-[300px] '
                    src={player.player_image}
                    alt="Shoes" />
            </figure>
            <div className="mt-5">
                <div className='flex'>
                    <img src={man} alt="" />
                    <h2 className="card-title ml-2">{player.player_name}</h2>
                </div>
                <div className='flex justify-between items-center mt-5 border-b-2 pb-3 border-gray-300'>
                    <div className='flex '>
                        <img className='w-[20px] h-[20px]' src={flag} alt="" />
                        <p className='ml-2'>{player.player_country}</p>
                    </div>
                    <button className='btn  btn-outline'>{player.playing_role}</button>
                </div>

                <div className='flex justify-between mt-5 font-bold '>
                    <span>Rating</span>
                    <span>5{player.rating}</span>
                </div>
                <div className='flex justify-between mt-5  '>
                    <span className='font-bold'>{player.batting_style}</span>
                    <span>{player.bowling_style}</span>
                </div>



                <div className="card-actions flex justify-between items-center mt-5">
                    <p>Price: ${player.price}</p>
                    <button disabled={isSelected} onClick={()=>handleSelected(player)} className="btn  btn-outline">{isSelected ?'Selected':'Choose Player'}</button>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard