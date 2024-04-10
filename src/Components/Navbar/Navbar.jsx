import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../Firebase/Firebase.config";
import { signOut } from "firebase/auth";

const Navbar = () => {

const {users} =useContext(AuthContext)

// const userDtail = user.user;
console.log(users)

const handleSignOut = ()=>{
  signOut(auth)
}
  const navigationItem = (
    <>
      <li>
        <Link to={'/'} >Home</Link>
      </li>
      <li>
        <Link to={'/allevent'} >All Events</Link>
      </li>
      <li>
        <Link to={'/contact'} >Contact Us</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navigationItem}
            </ul>
          </div>
          <Link to={'/'} className="flex items-center  text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Green Event   
      </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navigationItem}</ul>
        </div>
        <div className="navbar-end">
          {
          users ? <div className="dropdown dropdown-end">
          <img src={users.photoURL} tabIndex={0} role="button" className="m-1 h-8 w-8 rounded-full"/>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a onClick={handleSignOut}>Sign Out</a></li>
          </ul>
        </div> : <Link className="btn" to={'/signIn'}>Sign In</Link>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
