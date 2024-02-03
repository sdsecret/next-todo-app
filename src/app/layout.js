import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/Material/material';
// Components
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '700']
});

export const metadata = {
  title: "Todo Next App",
  description: "Complete your daily goal using Todo App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider>
          <body className={roboto.className}>
            <div className='mx-2 sticky top-4'>
              <Navbar />
              <main className="mx-auto max-w-screen-xl mt-4 h-max">
                {children}
              </main>
            </div>
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
