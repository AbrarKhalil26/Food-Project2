import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navData } from '../data/data'
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const MenuInMobile = ({ setShowMenu, activeLink, setActiveLink }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full' style={{ zIndex: '999'}}>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20' style={{ zIndex: '1000'}} onClick={() => setShowMenu(false)}></div>
      <div className='absolute top-0 left-0 flex flex-col gap-16 h-full w-72 bg-white py-16 px-10' style={{ zIndex: '1001', boxShadow: "0px 5px 90px 0px rgba(0, 0, 0, 0.1)" }}>
        <Link to='/' className='logo mr-10 @4xl:mr-16 text-4xl'>
          Kocina
        </Link>
        <ul className='flex flex-col gap-10 items-center'>
          {navData.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={`text-gray-500 hover:text-orange text-xl ${activeLink === item.title ? 'text-orange' : ''}`}
                  onClick={() => {setActiveLink(item.title); setShowMenu(false)}}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className='flex flex-col gap-4'>
          <button className='btn btn-primary'>Sign in</button>
          <button className='btn btn-secondary'>Sign up</button>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  // Toggle search input visibility
  const toggleSearch = () => setShowSearch(!showSearch);

  useEffect(() => {
    // Click event handler for clicks outside the search box
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  return (
    <>
    {
      showMenu && <MenuInMobile setShowMenu={setShowMenu} setActiveLink={setActiveLink} activeLink={activeLink}/> 
    }
      <nav className='@container'>
        <div className='mx-auto relative top-0 left-0 w-full bg-white'>
          <div className='mx-8 p-8 px-3 @4xl:px-8 flex items-center justify-between md:justify-start'>
            <Link to='/' className='logo text-2xl mr-10 @4xl:mr-16'>
              Kocina
            </Link>
            <div>
              <IoMenu className='text-2xl md:hidden text-gray-500 cursor-pointer' onClick={() => setShowMenu(!showMenu)}/>
            </div>
            <div className='hidden md:flex space-x-6'>
              {navData.map((item) => {
                return (
                  <NavLink
                    to={item.link}
                    key={item.id}
                    className={`text-gray-500 hover:text-orange ${activeLink === item.title ? 'text-orange' : ''}`}
                    onClick={() => setActiveLink(item.title)}
                  >
                    {item.title}
                  </NavLink>
                );
              })}
            </div>
            <div className='hidden ml-auto md:flex items-center gap-3'>
              <div className='flex space-x-6 items-center' ref={searchRef}>
                {showSearch && (
                  <input
                    type='search'
                    placeholder='Search...'
                    className='border border-gray-300 rounded-lg py-2 px-4'
                  />
                )}
                <IoIosSearch className='text-2xl text-gray-500 cursor-pointer' onClick={toggleSearch} />
              </div>
              <div className='flex gap-2 @4xl:gap-4'>
                <button className='btn btn-primary'>
                  <Link to='/signin'>Sign in</Link>
                </button>
                <button className='btn btn-secondary'>
                  <Link to='/signup'>Sign up</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        </nav>
    </>
  );
}

export default Navbar
