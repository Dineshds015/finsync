import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner';
import { Link, Linkedin, Globe, Instagram, Twitter } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "FinSync",
  description: "Finance management plateform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider>
            {/*header*/}
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Toaster richColors />
            {/* footer */}
            <footer className="bg-muted py-12">
              <div className="container mx-auto px-4 text-center text-muted-foreground">
                <p className="flex justify-center items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/dineshds015"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://dineshds015.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Portfolio"
                    className="inline-flex items-center"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com/ds346374/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Portfolio"
                    className="inline-flex items-center"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/mr._dineshds/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Portfolio"
                    className="inline-flex items-center"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </p>
                <p>Made by Dinesh</p>
              </div>
            </footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
