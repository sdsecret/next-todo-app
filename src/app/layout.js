import { Roboto } from "next/font/google";
import "./globals.css";
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
    <html lang="en">
      <ThemeProvider>
        <body className={roboto.className}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
