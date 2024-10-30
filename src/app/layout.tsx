import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const lato = localFont({
  src: [
    {
      path: './fonts/Lato-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Lato-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Lato-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Lato-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const metadata: Metadata = {
  title: "Sortea2 - Realizar un sorteo",
  description: "Genera un sorteo falso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`bg-light min-h-screen flex flex-col text-black ${lato.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
