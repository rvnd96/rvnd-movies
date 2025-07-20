import { Link } from "react-router-dom";
import { Home, Film, Tv } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { toggleTheme } from "../store/theme/themeSlice";

const Navbar = () => {
  const theme = useSelector((state: RootState) => state.theme.current);
  const dispatch = useDispatch();
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          RvNd Movies
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link to="/" className="flex items-center gap-1">
              <Home size={18} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/films" className="flex items-center gap-1">
              <Film size={18} />
              Films
            </Link>
          </li>
          <li>
            <Link to="/tv-shows" className="flex items-center gap-1">
              <Tv size={18} />
              TV Shows
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button
          className={`btn btn-sm ${
            theme === "cupcake" ? "btn-outline" : "btn-primary text-white"
          }`}
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "cupcake" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
