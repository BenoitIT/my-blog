import { IoIosMenu } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const NavBar = () => {
  const loaction = useLocation().pathname;
  return (
    <nav className="bg-[#008282] border-gray-200 sticky top-0">
      <div className="w-full flex  justify-between  py-4 px-[8vw]">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <IoIosMenu />
        </button>
        <div className="text-3xl font-extrabold text-white">
          <Link to="/" aria-current="page">
            Blogerz
          </Link>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-normal flex flex-col p-4 md:p-0 mt-2  text-white md:flex-row gap-2">
            <li>
              <Link
                to="/"
                className={loaction == "/" ? "font-bold" : ""}
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to={"/myblogs"}
                className={loaction == "/myblogs" ? "font-bold" : ""}
              >
                My posts
              </Link>
            </li>
            <li>
              <Link
                to={"/signin"}
                className={loaction == "/signin" ? "font-bold" : ""}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to={"/signup"}
                className={loaction == "/signup" ? "font-bold" : ""}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
