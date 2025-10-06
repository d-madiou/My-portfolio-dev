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
  title: "Artistic - Creative Portfolio",
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
      <body
        className={`${inter.className} bg-black text-white overflow-x-hidden m-0 p-0`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Full-width container */}
          <div className="w-full min-h-screen flex flex-col">
            {/* Sticky header touching top edge */}
            {/* <Header /> */}

            {/* Hero or main content filling available space */}
            <main className="flex-1 w-full">
              {/* <Hero /> */}
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
