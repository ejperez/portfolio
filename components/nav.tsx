"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const menuItems = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /* Fix for short last section bug */
  useEffect(() => {
    let justReachedBottom = false;

    const detectEndOfPage = () => {
      const scrolledTo = Math.ceil(window.scrollY + window.innerHeight);
      const isBottomReached = document.body.scrollHeight === scrolledTo;
      const currentMenu = menu?.current as HTMLDivElement;
      const lastItem = currentMenu.children[currentMenu.children.length - 1];
      const secondToLastItem =
        currentMenu.children[currentMenu.children.length - 2];

      if (isBottomReached) {
        Array.from(currentMenu.children).forEach((item: Element, index) => {
          item.classList.remove("active");
        });

        lastItem.classList.add("active");
        justReachedBottom = true;
      } else {
        lastItem.classList.remove("active");

        if (justReachedBottom) {
          justReachedBottom = false;
          secondToLastItem.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", detectEndOfPage);

    return () => window.removeEventListener("scroll", detectEndOfPage);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-slate-300 hover:text-white">
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </div>

          <div className="hidden md:flex space-x-8" ref={menu}>
            {menuItems.map((item) => (
              <Link
                key={item}
                activeClass="active"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                className="animated-link"
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900 border-b border-slate-700 shadow-lg">
            <div className="px-4 py-2 space-y-1" ref={menu}>
              {menuItems.map((item) => (
                <Link
                  key={item}
                  activeClass="active"
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  className="block w-full text-left px-3 py-2 text-slate-300 bg-slate-800 rounded-md transition-colors animated-link"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
