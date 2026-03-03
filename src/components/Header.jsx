import React, { useState } from 'react'
import Logo from '../assets/image/disney_logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';


function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'Home',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },

    ]

    return (
        <div className='flex item-center justify-between py-5'>
            <div className='flex gap-8  item-center'>
                <img src={Logo} alt="Disney" className='w-[80px] md:w-[115px] object-cover' />

                {/* สำหรับหน้าจอขนาดใหญ่  */}
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>

                <div className='flex md:hidden gap-5 items-center'>
                    {menu.slice(0, 3).map((item) => (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}

                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                            {menu.slice(4).map((item) => (
                                <HeaderItem name={item.name} Icon={item.icon} />
                            ))}
                        </div> : null}
                    </div>

                </div>
            </div>

            <div className='flex items-center px-2' >
                <img
                    className=' w-[40px] rounded-full '
                    src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    alt="Avatar"
                />
            </div>


        </div>
    )
}

export default Header
