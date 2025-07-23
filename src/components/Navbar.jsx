import { useState } from "react"
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Send,
  Info,
  Zap,
  Users,
  FileText,
  Mail,
} from "lucide-react"
import { Link, animateScroll as scroll } from "react-scroll"

const navItems = [
  { id: "about", label: "Tentang", icon: <Info size={18} /> },
  { id: "committee", label: "AJK", icon: <Users size={18} /> },
  { id: "activities", label: "Aktiviti", icon: <Zap size={18} /> },
  { id: "gallery", label: "Gallery", icon: <FileText size={18} /> },
  { id: "contact", label: "Hubungi", icon: <Mail size={18} /> },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-screen z-50 bg-white text-black shadow-md border-b border-gray-200">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between max-w-screen-xl mx-auto px-8 py-4">
        {/* Brand */}
        <div
          className="text-black text-2xl font-bold cursor-pointer"
          onClick={scrollToTop}
        >
          KRT LP7
        </div>

        {/* Menu */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              className="relative cursor-pointer transition text-black hover:text-orange-500"
            >
              <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-black">
          <a href="#" className="hover:text-orange-500"><Facebook size={20} /></a>
          <a href="#" className="hover:text-orange-500"><Instagram size={20} /></a>
          <a href="#" className="hover:text-orange-500"><Send size={20} /></a>
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className="flex md:hidden justify-end items-center px-4 py-3 bg-transparent absolute top-0 right-0 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 border border-orange-500 text-orange-500 rounded bg-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-40 transition-all duration-300 ease-in-out border-r border-orange-500 ${
          isOpen ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col justify-between h-full px-6 pt-6 pb-4">
          {/* Brand */}
          <div
            className="text-2xl font-bold mb-6 text-center cursor-pointer"
            onClick={scrollToTop}
          >
            KRT LP7
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-orange-500 mb-4" />

          {/* Menu Items */}
          <div className="flex flex-col gap-4 mb-10">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition flex items-center gap-2 group"
              >
                <span className="transition-transform duration-300 ease-in-out group-hover:rotate-180">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Footer Social */}
          <div>
            <div className="w-full h-[1px] bg-orange-500 mb-4" />
            <div className="flex justify-center gap-4 text-black">
              <a href="#" className="hover:text-orange-500"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-500"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-500"><Send size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
