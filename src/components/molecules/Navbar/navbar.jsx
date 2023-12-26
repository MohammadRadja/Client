// import React from "react";
// import { BsMessenger } from "react-icons/bs";
// import { IoNotifications } from "react-icons/io5";
// import { CgMenuGridO } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { BiHomeSmile, BiListCheck, BiTime, BiMoney} from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useSignOut } from "react-auth-kit";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect} from "react";

const Navbar = () => {
  const signOut = useSignOut();

  //HamburgerMenu
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol tampilan menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Mengubah status tampilan menu saat tombol hamburger diklik
  };
  

  //Navigasi Icon Untuk Navbar dan Hamburger
  const [selectedIcon, setSelectedIcon] = useState('home');
  const handleIconClick = (IconName) => {
    setSelectedIcon(IconName);
  };

  //Navigasi Icon dan Hover untuk Navbar dan Hamburger
  const [isHovered, setIsHovered] = useState(false);
  const handleLinkClick = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

 
  //useEffect untuk icon 
  const location = useLocation();
  useEffect(() => {
    // Update selectedIcon berdasarkan path yang aktif (location.pathname)
      if (location.pathname === '/home') {
        setSelectedIcon('home');
      } else if (location.pathname === '/activity') {
        setSelectedIcon('activity');
      } else if (location.pathname === '/timeManagement') {
        setSelectedIcon('timeManagement');
      } else if (location.pathname === '/financialRecord') {
        setSelectedIcon('financialRecord');
      } else if (location.pathname === '/dietPlan') {
        setSelectedIcon('dietPlan');
      } else {
        setSelectedIcon('');
      }
    }, [location.pathname]); // Jalankan efek setiap kali location.pathname berubah

  
  return (
    <div className="py-2 px-4 bg-white shadow flex justify-between top-0 sticky z-50">
       <Link to='/home' className="flex items-center">
        <img src="/images/logo.png" alt="LifeSyncHub logo" className='w-10 h-10 sm:h-9 mr-3' />
        </Link>
        
      {/* Hamburger Menu */}
      <button onClick={toggleMenu} className="lg:hidden ml-auto text-3xl focus:outline-none">
        ☰
      </button>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 bg-white shadow mt-2 w-48 rounded-lg overflow-hidden">
          <div className="flex flex-col py-2">
            <Link
              to="/home"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick('home'); // Set selectedIcon ke 'home'
              }}
              onMouseEnter={() => setIsHovered('home')}
              onMouseLeave={() => setIsHovered('')}
              className={`block px-4 py-2 transition duration-300 cursor pointer
              ${isHovered === 'home' || selectedIcon === 'home' ? 'bg-primary' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/activity"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick('activity'); // Set selectedIcon ke 'activity'
              }}
              onMouseEnter={() => setIsHovered('activity')}
              onMouseLeave={() => setIsHovered('')}
              className={`block px-4 py-2 transition duration-300 cursor pointer
              ${isHovered === 'activity' || selectedIcon === 'activity' ? 'bg-primary' : ''}`}
              >
              Activity
            </Link>
            <Link
              to="/timeManagement"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick('timeManagement'); // Set selectedIcon ke 'timeManagement'
              }}
              onMouseEnter={() => setIsHovered('timeManagement')}
              onMouseLeave={() => setIsHovered('')}
              className={`block px-4 py-2 transition duration-300 cursor pointer
              ${isHovered === 'timeManagement' || selectedIcon === 'timeManagement' ? 'bg-primary' : ''}`}
              >
              Time Management
            </Link>
            <Link
              to="/financialRecord"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick('financialRecord'); // Set selectedIcon ke 'financialRecord'
              }}
              onMouseEnter={() => setIsHovered('financialRecord')}
              onMouseLeave={() => setIsHovered('')}
              className={`block px-4 py-2 transition duration-300 cursor pointer
              ${isHovered === 'financialRecord' || selectedIcon === 'financialRecord' ? 'bg-primary' : ''}`}
              >
              Financial Record
            </Link>
            <Link
              to="/dietPlan"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick('dietPlan'); // Set selectedIcon ke 'dietPlan'
              }}
              onMouseEnter={() => setIsHovered('dietPlan')}
              onMouseLeave={() => setIsHovered('')}
              className={`block px-4 py-2 transition duration-300 cursor pointer
              ${isHovered === 'dietPlan' || selectedIcon === 'dietPlan' ? 'bg-primary' : ''}`}
              >
              Diet Plan
            </Link>
            <Link
              to="/home"
              onClick={() => {
                signOut();
              }}
              onMouseEnter={() => setIsHovered('Sign Out')}
              onMouseLeave={handleMouseLeave}
              className={`block px-4 py-2 transition duration-300 cursor pointer
              ${isHovered === 'signOut' || selectedIcon === 'signOut' ? 'bg-primary' : ''}`}
              >
              Log Out
            </Link>
          </div>
        </div>
      )}
      {/* Hamburger Menu End */}


      {/* Navbar Center */}
      <div className="hidden lg:flex items-center justify-center gap-[50px] text-[30px] text-gray-500">
      <Link to='/home'>
        <BiHomeSmile
            style={selectedIcon === 'home' ? { borderBottom: '3px solid blue' } : {}}
            onClick={() => handleIconClick('home')}
          />
      </Link>
      <Link to='/activity'>
      <BiListCheck
        onClick={() => handleIconClick('activity')}
        style={{
          borderBottom: selectedIcon === 'activity' ? '3px solid blue' : 'none',
        }}
      />
      </Link>
      <Link to="/timeManagement">
          <BiTime
            style={{ borderBottom: selectedIcon === 'timeManagement' ? '3px solid blue' : 'none' }}
            onClick={() => handleIconClick('timeManagement')}
          />
      </Link>
      <Link to="/financialRecord">
          <BiMoney
            style={{ borderBottom: selectedIcon === 'financialRecord' ? '3px solid blue' : 'none' }}
            onClick={() => handleIconClick('financialRecord')}
          />
        </Link>
        <Link to="/dietPlan">
          <GiWeightLiftingUp
            style={{ borderBottom: selectedIcon === 'dietPlan' ? '3px solid blue' : 'none' }}
            onClick={() => handleIconClick('dietPlan')}
          />
        </Link>
      </div>
      {/* Navbar Center End */}


      {/* Navbar Right */}
      <div className="lg:flex items-center gap-[20px] text-[30px]">
      {/* <Link to='/menu'>
        <div
          onClick={() => handleLinkClick('menu')}
          onMouseEnter={() => setIsHovered('menu')}
          onMouseLeave={handleMouseLeave}
          className={`icon_wrapper text-[20px] cursor-pointer ${isHovered === 'menu' ? 'text-blue-500' : ''}`}
        >
          <CgMenuGridO />
        </div>
      </Link>
      <Link to='/messenger'>
        <div
          onClick={() => handleLinkClick('messenger')}
          onMouseEnter={() => setIsHovered('messenger')}
          onMouseLeave={handleMouseLeave}
          className={`icon_wrapper text-[20px] cursor-pointer ${isHovered === 'messenger' ? 'text-blue-500' : ''}`}
        >
          <BsMessenger />
        </div>
      </Link>
      <Link to='/notification'>
        <div
          onClick={() => handleLinkClick('notification')}
          onMouseEnter={() => setIsHovered('notification')}
          onMouseLeave={handleMouseLeave}
          className={`icon_wrapper text-[20px] cursor-pointer ${isHovered === 'notification' ? 'text-blue-500' : ''}`}
        >
          <IoNotifications />
        </div>
      </Link> */}
      <Link to='/home'>
        <button
          onMouseEnter={() => setIsHovered('signOut')}
          onMouseLeave={handleMouseLeave}
          className={`hidden lg:icon_wrapper text-[20px] ml-4 cursor-pointer  ${isHovered === 'signOut' ? 'text-blue-500' : ''}`}
          onClick={() => {
            signOut();
          }}
        >
          <IoMdLogOut />
        </button>
      </Link>
      </div>
        {/* Navbar Right End */}


    </div>
  );
};

export default Navbar;
