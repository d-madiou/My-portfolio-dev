import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Hero from "@/components/layout/Hero";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Thierno.dev portfolio",
  description: "Bringing your ideas to life creatively.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-[#030303] text-foreground overflow-x-hidden m-0 p-0`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Force dark mode default for this aesthetic
          enableSystem={false} // tailored for the dark aesthetic
          disableTransitionOnChange
        >
          {/* --- AMBIENT BACKGROUND LAYERS --- */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
             {/* Primary Green Blob (Top Left) - Matches your brand-green */}
             <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
             
             {/* Secondary Cool Blob (Bottom Right) - Adds depth */}
             <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
             
             {/* Subtle Noise Texture - Adds realism to glassmorphism */}
             <div 
               className="absolute inset-0 opacity-[0.03]" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
               }} 
             />
          </div>

          {/* --- MAIN CONTENT WRAPPER --- */}
          <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">
            {/* Optional: Add Header here if you want it on all pages */}
            {/* <Header /> */} 
            
            <main className="flex-1 w-full items-center justify-center">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}