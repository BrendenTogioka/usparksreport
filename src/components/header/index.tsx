"use client";
import Link from "next/link";
import { useState } from "react"; // import state

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <header className="border-b border-gray-200 py-8 px-2 sm:px-4 lg:px-8">
      <div className="flex items-center justify-between max-w-screen-xl	mx-auto">
        <Link href="/">
          <h1 className="font-black text-2xl">US Parks Report</h1>
        </Link>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/">Northeast</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/">Midwest</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/">South</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/">West</Link>
                </li>

                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <Link href="/">Northeast</Link>
            </li>
            <li>
              <Link href="/">Midwest</Link>
            </li>
            <li>
              <Link href="/">South</Link>
            </li>
            <li>
              <Link href="/">West</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </header>
  );
}
