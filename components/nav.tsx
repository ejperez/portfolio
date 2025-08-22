"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const menuItems = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement | null>(null);
  const mobileMenu = useRef<HTMLDivElement | null>(null);
  const nav = useRef<HTMLElement | null>(null);
  const home = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const modifySelectMenuItem = (menu: HTMLDivElement) => {
      if (!menu) {
        return;
      }

      const scrolledTo = Math.ceil(window.scrollY + window.innerHeight);
      const isBottomReached = document.body.scrollHeight === scrolledTo;
      const lastItem = menu.children[menu.children.length - 1];
      const secondToLastItem = menu.children[menu.children.length - 2];

      if (isBottomReached) {
        Array.from(menu.children).forEach((item: Element) => {
          item.classList.remove("active");
        });

        lastItem.classList.add("active");
        menu.dataset.reachedBottom = "1";
      } else {
        lastItem.classList.remove("active");

        if (menu.dataset.reachedBottom === "1") {
          menu.dataset.reachedBottom = "0";
          secondToLastItem.classList.add("active");
        }
      }
    };

    const modifyNav = () => {
      if (!nav) {
        return;
      }

      const backgroundClasses = [
        "bg-slate-900/80",
        "backdrop-blur-md",
        "border-b",
        "border-slate-700",
      ];
      const currentNav = nav?.current as HTMLElement;

      if (window.scrollY === 0) {
        currentNav.classList.remove(...backgroundClasses);
      } else {
        currentNav.classList.add(...backgroundClasses);
      }
    };

    const modifyHome = () => {
      if (!home) {
        return;
      }

      const currentHome = home?.current as HTMLElement;

      if (window.scrollY === 0) {
        currentHome.classList.add("opacity-0");
        currentHome.classList.remove("opacity-100");
      } else {
        currentHome.classList.add("opacity-100");
        currentHome.classList.remove("opacity-0");
      }
    };

    const detectEndOfPage = () => {
      modifySelectMenuItem(menu.current as HTMLDivElement);
      modifySelectMenuItem(mobileMenu.current as HTMLDivElement);
    };

    const detectStartOfPage = () => {
      modifyNav();
      modifyHome();
    };

    window.addEventListener("scroll", detectEndOfPage);
    window.addEventListener("scroll", detectStartOfPage);

    detectEndOfPage();
    detectStartOfPage();

    return () => {
      window.removeEventListener("scroll", detectEndOfPage);
      window.removeEventListener("scroll", detectStartOfPage);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      ref={nav}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="font-bold text-xl text-slate-300 hover:text-white opacity-0 transition-opacity duration-300"
            ref={home}
          >
            <Link to="home" spy={true} smooth={true} duration={500}>
              EJP
            </Link>
          </div>

          <div
            className="hidden md:flex space-x-8"
            ref={menu}
            data-reached-bottom="0"
          >
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
            <div
              className="px-4 py-2 space-y-1"
              ref={mobileMenu}
              data-reached-bottom="0"
            >
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
