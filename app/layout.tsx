import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = localFont({
  src: [
    {
      path: '../public/fonts/PlayfairDisplay-Bold.woff2', 
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-playfair',
  display: 'swap',
});

const roboto = localFont({
  src: [
    {
      path: '../public/fonts/Roboto-Regular.woff2', 
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-roboto',
  display: 'swap',
});

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter24pt-Regular.woff2', 
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Interieur & Design Configurator",
  description: "Exclusieve designpakketten en woonstijlen configureren en downloaden.",
  icons: {
    icon: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} ${roboto.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
