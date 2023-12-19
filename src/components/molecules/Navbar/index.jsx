import { Link } from 'react-router-dom';
import NavList from '../../atoms/NavList';
import { useIsAuthenticated, useAuthUser, useSignOut } from 'react-auth-kit';
const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();
  const user = useAuthUser();
  const signOut = useSignOut();
  return (
    <div className="flex justify-between px-20 py-5  items-center">
      <Link to={'/'} className="flex items-center">
        <img src="/images/logo.png" alt="logo" className='w-10 h-10 mr-2' />
        <h1 className="font-black text-transparent text-2xl top-0 left-0 [background:linear-gradient(180deg,rgb(58,142,246)_0%,rgb(110.75,57.8,249.75)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Black',Helvetica]">
          HealthyMe</h1>
      </Link>
      <div>
        <ul className="flex items-center justify-center gap-5 ">
          <NavList href="/">Home</NavList>
          <NavList href="/blog">About</NavList>
          <NavList href="/blog">How To Use</NavList>
          {isAuthenticated() ? (
            <>
              <NavList href="/form">Input Kegiatan</NavList>
              <p>
                Halooo <span className="font-bold">{user().name}</span>
              </p>
              <button
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* <NavList href="/login">Login</NavList>
              <NavList href="/register">Register</NavList> */}
            </>
          )}
          <button
               className=" w-[100px]  h-[46px] top-0 left-0 [font-family:'Satoshi-Black',Helvetica] text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-black rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
               >
              Log In
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
