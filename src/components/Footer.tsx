import { Link } from "react-router-dom";
import { Home, Film, Tv } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-4 bg-base-200 text-base-content sticky bottom-0 w-full flex flex-col items-center">
      {/* Mobile Navigation */}
      <div className="block lg:hidden mt-2">
        <ul className="menu menu-horizontal gap-6 text-sm">
          <li>
            <Link to="/" className="flex flex-col items-center gap-1">
              <Home size={20} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/films" className="flex flex-col items-center gap-1">
              <Film size={20} />
              Films
            </Link>
          </li>
          <li>
            <Link to="/tv-shows" className="flex flex-col items-center gap-1">
              <Tv size={20} />
              TV Shows
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-2 text-xs">
        <p>© {new Date().getFullYear()} MovieApp by RvNd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
