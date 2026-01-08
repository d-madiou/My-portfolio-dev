import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  // Updated to match your CV/Footer details
  title: "Diallo Madiou | Full Stack Engineer", 
  description: "Crafting digital experiences where code meets creativity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      
      {/* 1. bg-white: Explicit light background
        2. text-zinc-900: High contrast dark text for readability
        3. antialiased: Smoother font rendering on light backgrounds
      */}
      <body className={`${inter.className} bg-white text-zinc-900 overflow-x-hidden m-0 p-0 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" 
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* --- AMBIENT BACKGROUND LAYERS (Updated for Orange Theme) --- */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
             
             {/* Primary Blob (Top Left): Brand Orange Glow */}
             {/* Replaced Green #AFFF00 with #FA891A */}
             <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FA891A]/15 rounded-full blur-[100px]" />
             
             {/* Secondary Blob (Bottom Right): Warm fill */}
             {/* A very faint orange/gray mix to keep the page feeling "warm" but clean */}
             <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-[#FA891A]/5 rounded-full blur-[120px]" />
             
             {/* Texture: Noise Grain */}
             {/* mix-blend-multiply allows the noise to sit naturally on white */}
             <div 
               className="absolute inset-0 opacity-[0.03] mix-blend-multiply" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
               }} 
             />
          </div>

          {/* --- MAIN CONTENT WRAPPER --- */}
          <div className="relative z-10 w-full min-h-screen flex flex-col">
            <main className="flex-grow w-full">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}