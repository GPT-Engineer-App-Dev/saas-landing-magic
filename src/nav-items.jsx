import { Home, Zap, DollarSign, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

import Features from "./pages/Features.jsx";
const Pricing = () => <div className="p-4">Pricing Page</div>;
const Contact = () => <div className="p-4">Contact Page</div>;

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <Zap className="h-4 w-4" />,
    page: <Features />,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <DollarSign className="h-4 w-4" />,
    page: <Pricing />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <Contact />,
  },
];
