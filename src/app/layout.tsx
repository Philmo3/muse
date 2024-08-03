import type { Metadata } from "next";
import "./globals.scss";
import localFont from 'next/font/local'
import {PT_Sans} from 'next/font/google'

export const metadata: Metadata = {
  title: "Les Muses Maitres Coiffeurs",
  description: "Muse",
};

const theSeason = localFont({
  src: [
    {
      path:'../../public/fonts/theseasons-reg.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/theseasons-bd.otf',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--season',
})

const ptSans = PT_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--PT'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={theSeason.variable + ' ' + ptSans.variable}>{children}</body>
    </html>
  );
}
