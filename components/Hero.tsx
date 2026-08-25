import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface HeroProps {
    onStart: () => void;
    data?: { // Maak data optioneel met een ?
        subtitel?: string;
        titel?: string;
        omschrijving?: string;
        afbeelding?: {
            node?: {
                sourceUrl?: string;
                altText?: string;
            };
        };
    };
}

export default function Hero({ onStart, data }: HeroProps) {
    // Als data nog niet geladen is, vang dit op met een leeg object of een loader
    if (!data) {
        return <div className="w-full min-h-[500px] animate-pulse bg-[#1a1a20]" />;
    }

    const { subtitel, titel, omschrijving, afbeelding } = data;

    return (
        <section className="w-full max-w-360 mx-auto px-6 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
                <span className="font-poppins text-xs uppercase tracking-[0.2em] text-accent">
                    {subtitel}
                </span>
                <h1 className="font-serif text-[clamp(2.5rem,5vw+1rem,4.5rem)] leading-[1.1] text-white">
                    {titel}
                </h1>
                <p className="font-sans text-lg leading-[160%] tracking-normal text-[#D9D3CB]">
                    {omschrijving}
                </p>

                <Button onClick={onStart} className="mt-4 w-fit px-10 py-5 border-[#8E8780] text-white font-medium tracking-widest hover:bg-primary hover:text-dark">
                    Start de configurator
                </Button>
            </div>

            <div className="relative w-full aspect-4/3 lg:aspect-auto h-125">
                <div className="absolute top-10 right-0 w-[90%] h-[90%] bg-[#D7C9F0] rounded-4xl" />

                <div className="absolute top-0 left-0 w-[90%] h-[90%] overflow-hidden rounded-4xl shadow-2xl">
                    {afbeelding?.node?.sourceUrl && (
                        <Image
                            src={afbeelding.node.sourceUrl}
                            alt={afbeelding.node.altText || "Interieur Design"}
                            fill
                            className="object-cover h-auto"
                            priority
                            unoptimized
                        />
                    )}
                </div>
            </div>
        </section>
    );
}