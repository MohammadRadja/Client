import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-gray-100 bg-opacity-90 border-gray-100 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="LifeSyncHub Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-blue-500">LifeSyncHub</span>
          </a>

          {/* Hamburger Menu */}
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 ${isMenuOpen ? "hidden" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`w-5 h-5 ${isMenuOpen ? "" : "hidden"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Hamburger Menu Content */}
            {isMenuOpen && (
              <div className="lg:hidden fixed top-0 right-0 bg-white shadow-md mt-16 w-35 rounded-lg">
                <div className="flex flex-col py-2">
                  <a
                    href="/login"
                    className="flex justify-center items-center
                     px-4 py-2 transition duration-300 cursor-pointer text-gray-700 hover:bg-gray-200 focus:bg-gray-200 rounded-md"
                  >
                    <span className="text-lg font-semibold">Log in</span>
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* Hamburger Menu End */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
