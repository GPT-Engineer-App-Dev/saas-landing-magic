import { Button } from "@/components/ui/button";
import { navItems } from "@/nav-items";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            SaaSLogo
          </Link>
          <nav>
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-gray-600 hover:text-gray-900">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
