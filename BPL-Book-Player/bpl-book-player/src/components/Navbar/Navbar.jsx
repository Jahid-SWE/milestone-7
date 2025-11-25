import React from 'react'
import navImg from '../../assets/logo.png'
import curency from '../../assets/curency.png'
const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto bg-white shadow-sm  ">
            <div className="flex-1">
                <a className=" text-xl">
                    <img className='w-[60px] h-[60px]' src={navImg} alt="" />
                </a>
            </div>
            <div className="flex justify-center">
                <span className='text-black mr-1'>{availableBalance}</span>
                <span className='text-black mr-1'>coin</span>
                <img src={curency} alt="" />
            </div>
        </div>
    )
}

export default Navbar