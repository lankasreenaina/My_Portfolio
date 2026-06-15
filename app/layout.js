import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { personalInfo, siteConfig } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 3. SEO & OPEN GRAPH METADATA Configuration
// This is critical for LinkedIn previews and placement visibility.
export const metadata = {
  title: `${personalInfo.name} | Portfolio`,
  description: personalInfo.headline,
  metadataBase: new URL(siteConfig.siteUrl), // Centralized URL configuration from siteConfig
  openGraph: {
    title: `${personalInfo.name} | Computer Science Engineering Portfolio`,
    description: personalInfo.headline,
    url: siteConfig.siteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Portfolio`,
    description: personalInfo.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* INLINE THEME INITIALIZER SCRIPT
            This executes immediately on load to read localStorage.theme 
            and apply the correct class. This completely eliminates 
            the white flash when loading the page. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-main text-text-main transition-colors duration-300">
        {/* Sticky Global Scroll Indicator */}
        <ScrollProgress />
        
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Core Page Render */}
        <main className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
