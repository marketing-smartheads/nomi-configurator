import React, { useState } from 'react';
import Image from 'next/image';

interface StoryProps {
    data: {
        subtitel: string;
        titel: string;
        videobron: string;
        videoPoster: {
            node: {
                sourceUrl: string;
            };
        };
    };
}

export default function Story({ data }: StoryProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!data) return null;

    const { subtitel, titel, videobron, videoPoster } = data;

    return (
        <section className="w-full max-w-360 mx-auto px-6 md:px-16 py-28 ">
            <div className="text-center mb-16 flex flex-col items-center">
                <span className="font-poppins text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    {subtitel}
                </span>
                <h2 className="font-serif text-[clamp(2rem,4vw+0.8rem,3.75rem)] leading-[1.15] text-white">
                    {titel}
                </h2>
            </div>

            <div className="relative w-full max-w-7xl mx-auto rounded-4xl overflow-hidden aspect-video shadow-2xl bg-[#1e1e1e]">
                {isPlaying ? (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${videobron}?autoplay=1&rel=0`}
                        title={titel || "YouTube video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <div 
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => setIsPlaying(true)}
                    >
                        {videoPoster?.node?.sourceUrl && (
                            <Image
                                src={videoPoster.node.sourceUrl}
                                alt={titel || "Video Poster"}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        )}
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white group-hover:bg-accent/50 transition-all duration-300 p-6 rounded-full backdrop-blur-md flex items-center justify-center shadow-2xl shadow-black transform group-hover:scale-105">
                                <svg className="w-12 h-12 text-black translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}