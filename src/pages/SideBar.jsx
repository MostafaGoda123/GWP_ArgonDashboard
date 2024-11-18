import React, { useContext, useEffect, useState } from 'react'
import { FaBars, FaRegMap, FaRegQuestionCircle, FaRegUser, FaWater } from 'react-icons/fa'
import logo from '../images/logo.png'
import avatar from '../images/avatar.png'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineNewspaper, HiOutlineSquares2X2, HiUsers } from 'react-icons/hi2'
import { LuUserSquare2 } from 'react-icons/lu'
import { SlCalender } from 'react-icons/sl'
import { RiBarChartFill } from 'react-icons/ri'
import { BiLineChart, BiSolidPieChartAlt2 } from 'react-icons/bi'
import { MenuContext } from '../context/MenuContext'

const SideBar = () => {

  let { menu , setMenu , isMobile , hideMenu , setHideMenu } = useContext(MenuContext)
  let [allLinks , setAllLinks] = useState([
    { icon: <HiOutlineSquares2X2 /> , name:'Dashboard' , to:'/' , active:true },
    { name:'Data' , title:true  },
    { icon: <HiUsers /> , name:'Manage Team' , to:'/team' , active:false },
    { icon: <LuUserSquare2 /> , name:'Contacts Information' , to:'/contacts' , active:false },
    { icon: <HiOutlineNewspaper /> , name:'Invoices Balances' , to:'/invoices' , active:false },
    { name:'Pages' , title:true  },
    { icon: <FaRegUser /> , name:'Profile Form' , to:'/form' , active:false },
    { icon: <SlCalender /> , name:'Calendar' , to:'/calendar' , active:false },
    { icon: <FaRegQuestionCircle /> , name:'FAQ Page' , to:'/faq' , active:false },
    { name:'Charts' , title:true  },
    { icon: <RiBarChartFill /> , name:'Bar Chart' , to:'/bar' , active:false },
    { icon: <BiSolidPieChartAlt2 /> , name:'Pie Chart' , to:'/pie' , active:false },
    { icon: <BiLineChart /> , name:'Line Chart' , to:'/line' , active:false },
    { icon: <FaRegMap /> , name:'Geography Chart' , to:'/geography' , active:false },
    { icon: <FaWater /> , name:'Stream Chart' , to:'/stream' , active:false },
  ]);
  function handleActive(pathname) {
    let newAllLinks = allLinks.map((link) => {
      if(link.to === pathname){
        link.active = true
      }else {
        link.active = false
      }
      return link
    })
    setAllLinks(newAllLinks)
  }
  let location = useLocation()
  useEffect(() => {
    handleActive(location.pathname)
  }, [location.pathname])

  return (
    <main onClick={() => isMobile ? setHideMenu(true) : null} className={`${isMobile ? ( hideMenu ? 'hidden' : 'flex w-full' ) : 'flex'} sideBar duration-300 bg-[--lightColor] h-[100vh] w-auto p-5 items-center gap-8 flex-col overflow-y-auto`}>
      <div className="flex justify-between items-center text-[--whiteColor] w-full">
        {menu && 
        <p className="flex items-center gap-2 text-[--greenColor] font-bold text-xl"><img src={logo} alt="" className='w-8 rounded-lg' />Argon</p>}
        <p onClick={()=>isMobile ? setMenu(true) : setMenu(!menu) } className="w-10 h-10 flex justify-center items-center text-2xl rounded-full duration-300 cursor-pointer hover:bg-[--darkColor]">
          <FaBars className='' />
        </p>
      </div>

      {menu && 
      <div className="w-full flex flex-col items-center">
        <img src={avatar} alt="" className='w-28 rounded-full' />
        <h2 className="font-semibold text-[--whiteColor] text-2xl">Tony/ Stark</h2>
        <p className='text-[--greenColor] text-lg'>VP Fancy Admin</p>
      </div>}

      <ul className='w-full flex flex-col gap-3 pb-5'>
        {allLinks.map((link,index) => (
          <li key={index+6969}><Link onClick={()=>link.title ? null : handleActive(link.to) } className={`flex items-center gap-3 ps-3 duration-300 hover:text-[--violetColor] w-full ${link.active ? 'text-[--violetColor]' : 'text-[--whiteColor]' } ${link.title && 'font-semibold text-xl mt-3 ps-0 hover:text-[--whiteColor] cursor-auto'}`} to={link.to}>{link.icon?<span className={menu?'text-lg':'text-xl'}>{link.icon}</span>:null}{menu && link.name}</Link></li>
        ))}
      </ul>

    </main>
  )
}

export default SideBar
