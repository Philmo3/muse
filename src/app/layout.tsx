import type { Metadata } from "next";
import "./globals.scss";
import localFont from 'next/font/local'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={theSeason.variable}>{children}</body>
    </html>
  );
}
