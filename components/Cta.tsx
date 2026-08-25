'use client';

import React from 'react';
import Button from './Button'; 

interface CtaProps {
    data: {
        subtitel: string;
        titel: string;
        knoptekst: string;
    };
    onStart: () => void;
    loading?: boolean; 
}

export default function Cta({ data, onStart, loading }: CtaProps) {
    if (!data) return null;

    const { subtitel, titel, knoptekst } = data;

    return (
        <section className="w-full max-w-360 mx-auto px-6 md:px-16 py-28 flex flex-col items-center text-center">
            <span className="font-poppins text-xs uppercase tracking-[0.2em] text-accent mb-7">
                {subtitel}
            </span>
        
            <h2 className="font-serif text-[clamp(1.875rem,3.5vw+0.75rem,3.75rem)] leading-[1.15] text-white mb-7">
                {titel}
            </h2>

            <Button 
                onClick={onStart}
                loading={loading}
            >
                {knoptekst}
            </Button>
        </section>
    );
}