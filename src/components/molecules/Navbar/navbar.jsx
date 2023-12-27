import { IoMdLogOut } from "react-icons/io";
import { BiHomeSmile, BiListCheck, BiTime, BiMoney, BiLogo99Designs, BiSolidLogOut, BiLogOut } from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useSignOut } from "react-auth-kit";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsNewspaper } from "react-icons/bs";

const Navbar = () => {
  const signOut = useSignOut();

  //HamburgerMenu
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol tampilan menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Mengubah status tampilan menu saat tombol hamburger diklik
  };

  //Navigasi Icon Untuk Navbar dan Hamburger
  const [selectedIcon, setSelectedIcon] = useState("home");
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
    if (location.pathname === "/home") {
      setSelectedIcon("home");
    } else if (location.pathname === "/activity") {
      setSelectedIcon("activity");
    } else if (location.pathname === "/timeManagement") {
      setSelectedIcon("timeManagement");
    } else if (location.pathname === "/financialRecord") {
      setSelectedIcon("financialRecord");
    } else if (location.pathname === "/dietPlan") {
      setSelectedIcon("dietPlan");
    } else if (location.pathname === "/blog") {
      setSelectedIcon("blog");
    } else {
      setSelectedIcon("");
    }
  }, [location.pathname]); // Jalankan efek setiap kali location.pathname berubah

  return (
    <div className="py-2 px-4 bg-white shadow flex justify-between top-0 sticky z-50">
      <Link to="/home" className="flex items-center">
        <img
          src="/images/logo.png"
          alt="LifeSyncHub logo"
          className="w-10 h-10 sm:h-9 mr-3"
        />
      </Link>

      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="lg:hidden ml-auto text-3xl focus:outline-none"
      >
        ☰
      </button>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 bg-white shadow mt-2 w-48 rounded-lg overflow-hidden">
          <div className="flex flex-col py-2">
            <Link
              to="/home"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick("home"); // Set selectedIcon ke 'home'
              }}
              onMouseEnter={() => setIsHovered("home")}
              onMouseLeave={() => setIsHovered("")}
              className={`px-4 py-2 transition duration-300 cursor pointer flex items-center gap-3
              ${
                isHovered === "home" || selectedIcon === "home"
                  ? "bg-primary"
                  : ""
              }`}
            >
              <BiHomeSmile className="text-xl text-secondary" />
              Home
            </Link>
            <Link
              to="/activity"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick("activity"); // Set selectedIcon ke 'activity'
              }}
              onMouseEnter={() => setIsHovered("activity")}
              onMouseLeave={() => setIsHovered("")}
              className={`px-4 py-2 transition duration-300 cursor pointer flex items-center gap-3
              ${
                isHovered === "activity" || selectedIcon === "activity"
                  ? "bg-primary"
                  : ""
              }`}
            >
              <BiListCheck className="text-xl text-secondary" />
              Activity
            </Link>
            <Link
              to="/timeManagement"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick("timeManagement"); // Set selectedIcon ke 'timeManagement'
              }}
              onMouseEnter={() => setIsHovered("timeManagement")}
              onMouseLeave={() => setIsHovered("")}
              className={`px-4 py-2 transition duration-300 cursor pointer flex items-center gap-3
              ${
                isHovered === "timeManagement" ||
                selectedIcon === "timeManagement"
                  ? "bg-primary"
                  : ""
              }`}
            >
              <BiTime className="text-xl text-secondary" />
              Time Management
            </Link>
            <Link
              to="/financialRecord"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick("financialRecord"); // Set selectedIcon ke 'financialRecord'
              }}
              onMouseEnter={() => setIsHovered("financialRecord")}
              onMouseLeave={() => setIsHovered("")}
              className={`px-4 py-2 transition duration-300 cursor pointer flex items-center gap-3
              ${
                isHovered === "financialRecord" ||
                selectedIcon === "financialRecord"
                  ? "bg-primary"
                  : ""
              }`}
            >
              <BiMoney className="text-xl text-secondary" />
              Financial Record
            </Link>
            <Link
              to="/dietPlan"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick("dietPlan"); // Set selectedIcon ke 'dietPlan'
              }}
              onMouseEnter={() => setIsHovered("dietPlan")}
              onMouseLeave={() => setIsHovered("")}
              className={`px-4 py-2 transition duration-300 cursor pointer flex items-center gap-3
              ${
                isHovered === "dietPlan" || selectedIcon === "dietPlan"
                  ? "bg-primary"
                  : ""
              }`}
            >
              <GiWeightLiftingUp className="text-xl text-secondary" />
              Diet Plan
            </Link>
            <Link
              to="/blog"
              onClick={() => {
                toggleMenu(); // Tutup menu saat tautan diklik
                handleLinkClick("blog"); // Set selectedIcon ke 'dietPlan'
              }}
              onMouseEnter={() => setIsHovered("blog")}
              onMouseLeave={() => setIsHovered("")}
              className={`px-4 py-2 transition duration-300 cursor pointer flex items-center gap-3
              ${
                isHovered === "blog" || selectedIcon === "blog"
                  ? "bg-primary"
                  : ""
              }`}
            >
            <BsNewspaper className="text-xl text-secondary" />
              Health Article
            </Link>
            <Link
              to="/home"
              onClick={() => {
                signOut();
              }}
              onMouseEnter={() => setIsHovered("Sign Out")}
              onMouseLeave={handleMouseLeave}
              className={`px-4 py-2 transition duration-300 cursor pointer flex items-center gap-3
              ${
                isHovered === "signOut" || selectedIcon === "signOut"
                  ? "bg-primary"
                  : ""
              }`}
            >
            <BiLogOut className="text-xl text-secondary" />
              Log Out
            </Link>
          </div>
        </div>
      )}
      {/* Hamburger Menu End */}

      {/* Navbar Center */}
      <div className="hidden lg:flex items-center justify-center gap-[50px] text-[30px] text-secondary">
        <Link to="/home">
          <BiHomeSmile
            style={
              selectedIcon === "home" ? { borderBottom: "3px solid blue" } : {}
            }
            onClick={() => handleIconClick("home")}
          />
        </Link>
        <Link to="/activity">
          <BiListCheck
            onClick={() => handleIconClick("activity")}
            style={{
              borderBottom:
                selectedIcon === "activity" ? "3px solid blue" : "none",
            }}
          />
        </Link>
        <Link to="/timeManagement">
          <BiTime
            style={{
              borderBottom:
                selectedIcon === "timeManagement" ? "3px solid blue" : "none",
            }}
            onClick={() => handleIconClick("timeManagement")}
          />
        </Link>
        <Link to="/financialRecord">
          <BiMoney
            style={{
              borderBottom:
                selectedIcon === "financialRecord" ? "3px solid blue" : "none",
            }}
            onClick={() => handleIconClick("financialRecord")}
          />
        </Link>
        <Link to="/dietPlan">
          <GiWeightLiftingUp
            style={{
              borderBottom:
                selectedIcon === "dietPlan" ? "3px solid blue" : "none",
            }}
            onClick={() => handleIconClick("dietPlan")}
          />
        </Link>
        <Link to="/blog">
          <BsNewspaper
            style={{
              borderBottom: selectedIcon === "blog" ? "3px solid blue" : "none",
            }}
            onClick={() => handleIconClick("blog")}
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
        <Link to="/home">
          <button
            onMouseEnter={() => setIsHovered("signOut")}
            onMouseLeave={handleMouseLeave}
            className={`hidden lg:icon_wrapper text-[20px] ml-4 cursor-pointer  ${
              isHovered === "signOut" ? "text-primary" : ""
            }`}
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
