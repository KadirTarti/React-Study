import { Victor_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/header/Header";
import PageTransition from "@/components/helpers/PageTransition";
import TransitionEffect from "@/components/helpers/TransitionEffect";

const victorMono =  Victor_Mono({
  subsets: ["latin"],
  weight: ["100", '200', '300', '400', '500', '600', '700'],
  variable: "--font-victorMono",
});

export const metadata = {
  title: "AKT Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={victorMono.variable}>
      <Header/>
      <TransitionEffect/>
      <PageTransition>
      {children}
      </PageTransition>
      </body>
    </html>
  );
}