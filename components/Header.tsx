'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
    onStart?: () => void;
    currentScreen: 'welcome' | 'configurator' | 'download';
}

export default function Header({ onStart, currentScreen }: HeaderProps) {
    const [hoveredScreen, setHoveredScreen] = useState<'welcome' | 'configurator'>(
        currentScreen === 'download' ? 'configurator' : currentScreen
    );
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const homeRef = useRef<HTMLButtonElement>(null);
    const configRef = useRef<HTMLButtonElement>(null);
    
    const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });

    useEffect(() => {
        const target = hoveredScreen === 'welcome' ? homeRef.current : configRef.current;
        if (target) {
            setSliderStyle({
                width: target.offsetWidth,
                left: target.offsetLeft,
            });
        }
    }, [hoveredScreen]);

    useEffect(() => {
        if (currentScreen !== 'download') {
            setHoveredScreen(currentScreen);
        }
    }, [currentScreen]);

    // Functie om slim te navigeren vanaf elke pagina (inclusief /download)
    const handleNavigation = (targetScreen: 'welcome' | 'configurator') => {
        if (typeof window !== 'undefined') {
            if (targetScreen === 'welcome') {
                // Zet direct de localStorage op welcome en wis de stap
                localStorage.setItem('current_screen', 'welcome');
                localStorage.removeItem('configuratorCurrentStep');
                window.location.href = '/';
            } else {
                localStorage.setItem('current_screen', 'configurator');
                localStorage.setItem('configuratorCurrentStep', '1');
                window.location.href = '/';
            }
            return;
        }

        if (currentScreen !== targetScreen && onStart) {
            onStart();
        }
    };

    return (
        <header className="w-full max-w-360 mx-auto h-24 sm:h-37.5 px-6 sm:px-16 flex items-center justify-between relative">
            
            <div className="flex items-center gap-3 sm:gap-5.5">
                <Image 
                    src="/assets/logo-nomi-white.svg" 
                    alt="Nomi Logo" 
                    width={120} 
                    height={34} 
                    className="w-22.5 sm:w-30 h-auto" 
                    priority 
                />
                
                <Image 
                    src="/assets/x-symbol-white.svg" 
                    alt="Divider" 
                    width={12} 
                    height={12} 
                    className="w-2.25 sm:w-3 h-auto" 
                    priority 
                />
                
                <Image 
                    src="/assets/logo-tdg-white.svg" 
                    alt="Thomas de Gier Logo" 
                    width={132} 
                    height={40} 
                    className="w-23.75 sm:w-33 h-auto" 
                    priority 
                />
                
            </div>

            {/* DESKTOP NAVIGATIE */}
            <nav 
                onMouseLeave={() => setHoveredScreen(currentScreen === 'download' ? 'configurator' : currentScreen)} 
                className="hidden md:flex relative bg-[#D9D3CB] rounded-full p-1.5 items-center w-fit h-15"
            >
                <div 
                    className="absolute top-1.5 bottom-1.5 rounded-full bg-dark shadow-md transition-all duration-500 ease-out pointer-events-none"
                    style={{ 
                        width: `${sliderStyle.width}px`, 
                        left: `${sliderStyle.left}px` 
                    }}
                />

                <button
                    ref={homeRef}
                    onClick={() => handleNavigation('welcome')}
                    onMouseEnter={() => setHoveredScreen('welcome')}
                    className={`
                        cursor-pointer relative z-10 px-8 py-4 rounded-full font-poppins font-semibold text-xs uppercase tracking-[0.15em] 
                        transition-all duration-500 whitespace-nowrap
                        ${hoveredScreen === 'welcome' 
                            ? 'text-secondary' 
                            : 'text-[#8E8780] hover:text-[#A6A09A]'
                        }
                    `}
                >
                    Home
                </button>

                <button
                    ref={configRef}
                    onClick={() => handleNavigation('configurator')}
                    onMouseEnter={() => setHoveredScreen('configurator')}
                    className={`
                        cursor-pointer relative z-10 px-8 py-4 rounded-full font-poppins font-semibold text-xs uppercase tracking-[0.15em] 
                        transition-all duration-500 whitespace-nowrap
                        ${hoveredScreen === 'configurator' 
                            ? 'text-secondary' 
                            : 'text-[#8E8780] hover:text-[#A6A09A]'
                        }
                    `}
                >
                    Configurator
                </button>
            </nav>

            {/* MOBIELE HAMBURGER KNOP */}
            <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-secondary p-2 focus:outline-none flex flex-col justify-center items-center w-10 h-10 gap-1.5 bg-[#D9D3CB]/10 rounded-full border border-secondary/20"
                aria-label="Open menu"
            >
                <span className={`w-5 h-0.5 bg-secondary transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-5 h-0.5 bg-secondary transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-0.5 bg-secondary transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* MOBIELE DROPDOWN / OVERLAY MENU */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-dark border-t border-secondary/10 shadow-2xl py-6 px-6 flex flex-col gap-4 md:hidden z-50 animate-fadeIn">
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            handleNavigation('welcome');
                        }}
                        className={`text-left py-3 px-4 rounded-xl font-poppins font-semibold text-xs uppercase tracking-[0.15em] transition-all ${
                            currentScreen === 'welcome' ? 'bg-primary text-white' : 'text-secondary bg-white/5'
                        }`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            handleNavigation('configurator');
                        }}
                        className={`text-left py-3 px-4 rounded-xl font-poppins font-semibold text-xs uppercase tracking-[0.15em] transition-all ${
                            currentScreen === 'configurator' ? 'bg-primary text-white' : 'text-secondary bg-white/5'
                        }`}
                    >
                        Configurator
                    </button>
                </div>
            )}
        </header>
    );
}