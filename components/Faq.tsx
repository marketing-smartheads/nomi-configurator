'use client';

import { useState } from 'react';

interface FaqItem {
    vraag: string;
    antwoord: string;
}

interface FaqProps {
    data: {
        subtitel: string;
        titel: string;
        vragen: FaqItem[];
    };
}

export default function Faq({ data }: FaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!data) return null;

    const { subtitel, titel, vragen } = data;

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#F4F1EA] py-28 px-6 md:px-16 text-dark">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="font-poppins text-xs uppercase tracking-[0.2em] text-primary mb-4">
                        {subtitel}
                    </span>
                    <h2 className="font-serif text-[clamp(2.25rem,3vw+1rem,3rem)] text-dark">
                        {titel}
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="border-t border-[#D9D3CB]">
                    {vragen && vragen.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border-b border-[#D9D3CB]">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
                                >
                                    <span className="font-inter text-lg md:text-xl text-dark group-hover:text-[#6b635b] transition-colors">
                                        {item.vraag}
                                    </span>
                                    <span className="text-xl font-light text-[#8E8780] ml-4 transition-transform duration-300">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>
                                {isOpen && (
                                    <p className="pb-6 text-[#55504A] font-sans text-sm md:text-base leading-relaxed">
                                        {item.antwoord}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}