import React from 'react'

const SelectedCard = ({player, removePlayer}) => {
    console.log(player)
    const handleRemove=()=>{
        removePlayer(player)
    }
    return (
        <div>
            <div className=' flex justify-between items-center p-3 border-2 border-gray-300 rounded-xl mt-2'>
                <div className='flex'>
                    <img className='w-[50px] h-[50px] rounded-xl' src={player.player_image} alt="" />
                    <div className='pl-3'>
                        <p className='font-bold text-2xl '>{player.player_name} </p>
                        <p>{player.batting_style}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/jvsbqcj6/delete.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default SelectedCard