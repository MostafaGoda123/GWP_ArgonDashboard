import React, { useContext, useState } from 'react'
import { CiBellOn, CiSearch, CiUser } from 'react-icons/ci';
import { IoMoonOutline, IoSettingsOutline, IoSunnyOutline } from 'react-icons/io5';
import { MenuContext } from '../context/MenuContext';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

   let { isMobile , setHideMenu } = useContext(MenuContext)
   const [darkMode, setDarkMode] = useState(true);
   function handleMode(lightMode) {
      setDarkMode(!lightMode)
      if (lightMode) {
         document.documentElement.style.setProperty('--darkColor',  '#ececec');
         document.documentElement.style.setProperty('--lightColor', '#FCFCFC');
         document.documentElement.style.setProperty('--whiteColor', '#000');
         document.documentElement.style.setProperty('--blackColor', '#fff');
         document.documentElement.style.setProperty('--greenColor', '#328871');
      }else{
         document.documentElement.style.setProperty('--darkColor', '#141B2D');
         document.documentElement.style.setProperty('--lightColor', '#434957');
         document.documentElement.style.setProperty('--whiteColor', '#fff');
         document.documentElement.style.setProperty('--blackColor', '#000');         
         document.documentElement.style.setProperty('--greenColor', '#4CCEAC');
      }
   }

   return (
      <nav className='h-[10vh] w-full flex items-center px-5 justify-between text-[--whiteColor] shadow shadow-[--lightColor]'>
         {isMobile?
         <p onClick={()=>setHideMenu(false)} className="w-10 h-10 flex justify-center items-center text-2xl rounded-full duration-300 cursor-pointer hover:bg-[--darkColor]">
            <FaBars />
         </p>
         :
         <div className="search w-60 h-[5vh] relative text-lg">
            <input type="text" placeholder='search' className='bg-[--lightColor] outline-none border-none p-2 w-full h-full rounded-lg' />
            <CiSearch className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer' />
         </div>}
         <div className="icons flex items-center gap-3 text-xl md:text-2xl">
            {darkMode ? <IoSunnyOutline onClick={()=>handleMode(true)} className='cursor-pointer duration-300 hover:text-[--violetColor]' /> : <IoMoonOutline onClick={()=>handleMode(false)} className='cursor-pointer duration-300 hover:text-[--violetColor]' />}
            <CiBellOn className='cursor-pointer duration-300 hover:text-[--violetColor]' />
            <IoSettingsOutline className='cursor-pointer duration-300 hover:text-[--violetColor]' />
            <CiUser className='cursor-pointer duration-300 hover:text-[--violetColor]' />
         </div>
      </nav>
   )
}

export default Navbar
