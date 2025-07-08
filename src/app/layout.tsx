import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "./Components/Topbar"
import Footer from "./Components/Footer";
import { Providers } from "./theme/provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Hernandez - Portfolio",
  description: "Welcome to my personal portfolio website.",
  keywords: ["Daniel Hernandez", "Portfolio", "Full Stack Developer", "Next.js", "React", "Tailwind CSS"],
  authors: [{ name: "Daniel Hernandez", url: "https://github.com/danez13" }],
  creator: "Daniel Hernandez",
  openGraph: {
    title: "Daniel Hernandez - Portfolio",
    description: "Welcome to my personal portfolio website.",
    url: "https://danez13.github.io/portfolio/",
    siteName: "Daniel Hernandez - Portfolio",
    images: [
      {
        url: "https://danez13.github.io/portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Hernandez - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground bg-background`}>
        <Providers>
          <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="absolute -z-10 inset-0 h-full w-full bg-[linear-gradient(to_right,var(--color-midground-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-midground-200)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,var(--color-midground-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-midground-800)_1px,transparent_1px)] bg-[size:48.5px_48.5px]">
              <div className="absolute -z-10 h-full w-full rounded-full bg-background opacity-70 blur-[100px]"></div>
            </div>
          </div>
          <Topbar/>
          <div className="h-6 md:h-23 lg:h-10"></div>
          {children}
          <div className="h-10"></div>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}