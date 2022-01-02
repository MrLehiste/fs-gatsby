import React from "react"
import logo from "../images/fs.png"
import Footer from "../components/footer"
import NavLinks from "../components/navlinks"
import { useLocation } from '@reach/router';
import { immutableItem } from "../components/useLocalStorage"


export default function Layout(props) {
  const landingPage = immutableItem('ref', useLocation().pathname);
  console.log('landingPage-ref', landingPage);
  return (
    <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8" src={logo} alt="FS Logo" />
                </div>
                <NavLinks tab={props.tab} isMobile={false} />
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    {/* Heroicon name: outline/bell */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  {/* Profile dropdown */}
                  <div className="ml-3 relative">
                    <div>
                      {/* Mobile menu button */}
                      <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {/* Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  {/* Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          <NavLinks tab={props.tab} isMobile={true} />
          
        </nav>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-yellow-700">
            如何在六個星期學會一個電商營銷賺取六至八位數字的收入
            </h1>
            <h1 className="text-xl font-bold text-gray-700">
            [就算沒有相關經驗也可以做到]
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-0 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-3 sm:px-0">
                { props.children }
              <div className="border-4 border-dashed border-gray-200 rounded-lg mt-8">
                <Footer />
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
  )
}