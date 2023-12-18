import { Link } from 'react-router-dom';
import NavList from '../../atoms/NavList';
import { useIsAuthenticated, useAuthUser, useSignOut } from 'react-auth-kit';
const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();
  const user = useAuthUser();
  const signOut = useSignOut();
  return (
    <div className="flex justify-between px-20 py-5 shadow items-center">
      <Link to={'/'}>
        <h1 className="font-bold text-2xl">HealthyMe</h1>
      </Link>
      <div>
        <input type="text" placeholder="Search" className="rounded-full" />
      </div>
      <div>
        <ul className="flex gap-5">
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
              <NavList href="/login">Login</NavList>
              <NavList href="/register">Register</NavList>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
