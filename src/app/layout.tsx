import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TechCanvas } from "@/components/TechCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ken | IoT & Electrical Engineer",
  description:
    "Portfolio of Ken — IoT systems architect, embedded firmware developer, and PCB designer. Showcasing MCU, RTOS, FPGA, and analog design projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-indigo-600 selection:text-white transition-colors duration-250 relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TechCanvas />
          <Navbar />
          <main className="flex-1 w-full relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}



