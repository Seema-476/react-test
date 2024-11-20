import React from 'react'
import { useState } from 'react';
import { SIDEBAR_BUTTON } from '../../common/Helper';
import OnDemand from '../../common/OnDemand'
import Programmes from '../../common/Programmes';
import Events from '../../common/Events';

const Sidebar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [active, setActive] = useState('tab-1');

    const toggleMenu = () => {
        setOpenNav(!openNav)
    }

    const handleClick = (event) => {
        setActive(event.target.id);
        setOpenNav(false);
    };
    const handleBacklayClick = () => {
        setOpenNav(false);
    };
    return (
        <div id="tab-1" className={`flex bg-gray w-full relative ${active === 'tab-1' ? 'active' : ''}`}>
            <div className={`absolute w-full h-full bg-black opacity-50 duration-700 md:hidden z-30 ${openNav ? '' : 'hidden'}`} onClick={handleBacklayClick}></div>
            <div
                className="w-6 h-5 md:hidden flex-col max-lg:flex gap-1 fixed left-2 top-3 z-40 cursor-pointer"
                onClick={toggleMenu}>
                {/* Top Line */}
                <span
                    className={`w-6 h-1 bg-black transition-transform duration-300 ${openNav ? 'rotate-45 absolute bg-red-500' : ''
                        }`}></span>
                <span
                    className={`w-6 h-1 bg-black transition-opacity duration-300 ${openNav ? 'opacity-0' : ''
                        }`}></span>
                <span
                    className={`w-6 h-1 bg-black transition-transform duration-300 ${openNav ? '-rotate-45 absolute bottom-12px bg-red-500' : ''
                        }`}></span>
            </div>
            <div className={`h-screen max-w-[240px] w-full bg-blue-300 flex flex-col justify-between pt-8 max-md:fixed z-30 duration-700 ${openNav ? 'left-0' : 'left-[-100%]'}`}>
                <div onClick={handleClick}>
                    {SIDEBAR_BUTTON.map((obj) => (
                        <div key={obj.id} className={`mb-8 flex px-5 ${active === obj.id ? 'active' : ''}`}>
                            <a href="#" id={obj.id} onClick={handleClick} className={`sidebar-items-svg text-2xl text-white flex items-center gap-4 ${active === 'active' ? '!text-black' : '!text-white'}`}>{obj.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full h-screen max-lg:overflow-y-scroll'>
                <div className='flex max-lg:flex-wrap w-full gap-4 px-8 relative z-20'>
                    {active === 'tab-2' && <Events active={active} />}
                    {active === 'tab-4' && <Programmes />}
                    {active === 'tab-1' && <><Events active={active} /> <Programmes /></>}
                </div>
                <div className='w-full ps-8'> {active === 'tab-3' && <OnDemand />}
                    {active === 'tab-1' && <OnDemand />}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
