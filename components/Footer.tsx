'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
    onNavigateHome?: () => void;
    onNavigateConfigurator?: (step?: number) => void;
}

export default function Footer({ onNavigateHome, onNavigateConfigurator }: FooterProps) {
    
    const handleConfiguratorClick = (step: number = 1) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('configuratorCurrentStep', step.toString());
            window.dispatchEvent(new Event('configuratorStepChange'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        if (onNavigateConfigurator) {
            onNavigateConfigurator(step);
        } else {
            if (typeof window !== 'undefined') {
                window.location.href = '/';
            }
        }
    };

    const handleHomeClick = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (onNavigateHome) {
            onNavigateHome();
        } else {
            if (typeof window !== 'undefined') {
                window.location.href = '/';
            }
        }
    };

    return (
        <footer className="w-full bg-[#121212] text-white pt-0 overflow-hidden">
            <div className="visual-bar w-full" />

            <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-center">
                    
                    {/* Logo's */}
                    <div className="md:col-span-6 flex items-center space-x-6">
                        <Image 
                            src="/assets/logo-nomi-white.svg" 
                            alt="Nomi Utrecht" 
                            width={90} 
                            height={30} 
                            className="object-contain"
                        />                        
                        <Image 
                            src="/assets/x-symbol-white.svg" 
                            alt="X" 
                            width={16} 
                            height={16} 
                            className="object-contain opacity-60"
                        />                        
                        <Image 
                            src="/assets/logo-tdg-white.svg" 
                            alt="Thomas de Gier" 
                            width={140} 
                            height={35} 
                            className="object-contain"
                        />                        
                    </div>

                    <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8 justify-end">

                        <div className="flex flex-col space-y-4">
                            <span className="font-poppins font-semibold text-[12px] tracking-[0.06em] text-secondary uppercase mb-2">
                                Navigatie
                            </span>
                            <button 
                                onClick={handleHomeClick} 
                                className="text-left font-sans text-[15px] text-muted hover:text-white transition-colors cursor-pointer"
                            >
                                Home
                            </button>
                            <button 
                                onClick={() => handleConfiguratorClick(1)} 
                                className="text-left font-sans text-[15px] text-muted hover:text-white transition-colors cursor-pointer"
                            >
                                Configurator
                            </button>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <span className="font-poppins font-semibold text-[12px] tracking-[0.06em] text-secondary uppercase mb-2">
                                Configurator
                            </span>
                            <button 
                                onClick={() => handleConfiguratorClick(1)} 
                                className="text-left font-sans text-[15px] text-muted hover:text-white transition-colors cursor-pointer"
                            >
                                Type woning
                            </button>
                        </div>

                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="font-sans text-[13px] text-muted">© 2026 Thomas de Gier × Nomi Utrecht. Alle rechten voorbehouden.</p>
                    
                    <div className="flex items-center space-x-3 mt-4 md:mt-0 font-sans text-[13px] text-muted">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <span className="text-muted/60">·</span>
                        <Link href="#" className="hover:text-white transition-colors">Voorwaarden</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}