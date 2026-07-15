"use client"
import { useEffect, useRef, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import ThemeButton from "./ThemeButton"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavBar, setShowNavBar] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShowNavBar(true)
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavBar(false)
      } else {
        setShowNavBar(true)
      }
      lastScrollY.current = currentScrollY
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed left-0 w-full z-50 px-6 transition-transform duration-300 ${showNavBar ? "top-6 translate-y-0" : "-translate-y-32"
      }`}>

      <div className="flex items-center justify-end md:justify-center ">
        <div className="hidden md:flex bg-secondary gap-4 border  px-6 py-2 shadow-[var(--shadow-brutal)]">
          <ul className="flex items-center gap-6">

            <li>
              <Link href="/" className={`${pathname === "/" ? "font-semibold" : "hover:font-semibold"}`}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/projects" className={`${pathname === "/projects" ? "font-semibold" : "hover:font-semibold"}`}>
                Projects
              </Link>
            </li>

            <div className="border h-6"></div>

            <li>
              <ThemeButton />
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden px-4 py-2 bg-secondary border shadow-[var(--shadow-brutal)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-secondary border p-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link href="/" className={`${pathname === "/" ? "font-semibold" : "hover:font-semibold"}`} onClick={() => setMenuOpen(false)}>Home</Link>
            </li>

            <li>
              <Link href="/projects" className={`${pathname === "/projects" ? "font-semibold" : "hover:font-semibold"}`} onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>

            <li>
              <ThemeButton />
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar