
import { Polygon } from "@html-polygon/react";
import { navLinksLeft, navLinksRight } from "../constants";
import { useState } from 'react';

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState('flowers');
    const [showTooltip, setShowTooltip] = useState(false);

    const Logo = () => {
        return (
          <a href="/" className="flex items-center text-white font-bold text-xl cursor-pointer group">
            <span className="font-extrabold text-2xl tracking-tighter text-red-400 opacity-90 transform group-hover:opacity-100 transition-all duration-200 mr-0.5">&#10094;</span>
            <span className="relative">
              <span className="relative z-10">inner</span>
              <div className="absolute inset-0 bg-white/10 rounded-sm -skew-x-12 scale-x-105 scale-y-90 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
            <span className="font-extrabold text-2xl tracking-tighter text-red-400 opacity-90 transform group-hover:opacity-100 transition-all duration-200 ml-0.5">&#10095;</span>
          </a>
        );
    };

    const NavItemsLeft = () => {
        return (
            <ul className="flex flex-col gap-4 sm:flex-row md:gap-4 ml-5">
                {navLinksLeft.map(({ id, title }) => (
                    <li key={id} className="max-sm:w-full max-sm:rounded-md max-sm:px-5">
                        <button 
                            onClick={() => setActiveTab(title)}
                            className={`relative text-neutral-400 font-bold hover:text-neutral-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 rounded-md px-3 py-1 group
                                ${activeTab === title ? 'text-yellow-300' : ''}`}
                        >
                            {title}
                            {/* Active indicator */}
                            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-200
                                ${activeTab === title ? 'w-full bg-yellow-300' : 'w-0 bg-transparent'}`} 
                            />
                        </button>
                    </li>
                ))}
            </ul>
        );
    };

    // Right Navigation Links
    const NavItemsRight = () => {
        return (
            <ul className="flex flex-col gap-4 sm:flex-row md:gap-6 ml-auto">
                {navLinksRight.map(({ id, href }) => (
                    <li key={id} className="max-sm:w-full max-sm:rounded-md max-sm:px-5">
                        <button 
                            onClick={() => {/* Handle specific icon actions */}}
                            className="p-1 hover:bg-neutral-600/20 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50 active:scale-95"
                        >
                            <img src={href} className="h-6 w-6 object-contain" />
                        </button>
                    </li>
                ))}
            </ul>
        );
    };

   
    const NavigationTooltip = () => {
        return (
            <div 
                className={`absolute top-full left-0 mt-2 transform transition-all duration-300 ease-in-out
                    ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
            >
                <div className="relative">
                    <div className=" bg-yellow-300 px-8 py-3  shadow-lg">
                        <p className="text-[#8B7BAF] whitespace-nowrap text-sm font-bold">
                            navigate the gardens through the eyes of [name]
                        </p>
                    </div>
                    {/* Triangle pointer */}
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-yellow-300 transform rotate-45" />
                </div>
            </div>
        );
    };
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#524F75]">
            <div className="w-full">
                <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
                    <div className="flex items-center relative">
                        <Logo />
                        <div 
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                            className="relative"
                        >
                            <Polygon
                                sides={8}
                                style={{
                                    height: "25px",
                                    width: "25px",
                                    backgroundColor: "gold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: "10px",
                                    cursor: "pointer",
                                    transition: "transform 0.2s ease-in-out",
                                    transform: showTooltip ? 'scale(1.1)' : 'scale(1)'
                                }}
                            />
                            <NavigationTooltip />
                        </div>
                        <NavItemsLeft />
                    </div>

                    <div className="flex items-center">
                        <NavItemsRight />
                        <button className="ml-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 rounded">
                            <Polygon
                                sides={6}
                                style={{
                                    height: "25px",
                                    width: "45px",
                                    backgroundColor: "#f87171",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: "10px",
                                    transition: "transform 0.2s ease-in-out",
                                }}
                                className="hover:scale-105 active:scale-95"
                            >
                                <h3 className="text-white text-xs font-bold">start</h3>
                            </Polygon>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};