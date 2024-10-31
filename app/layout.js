import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "./authContext";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Any Task",
  description: "Connecting Odd Jobs and Skilled Proffesionals",
};



const footer = (
  <footer className="p-4 sm:p-8 flex justify-center mx-auto place-items-center items-center ">
    <div className="Flex flex-col  justify-center mx-auto w-full max-w-screen-xl place-content-center">
      &copy; {new Date().getFullYear()} anytask All rights reserved.
    </div>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">

        <body
          className={
            "w-full max-w-[100vw] mx-auto text-sm sm:text-base font-lato min-h-screen flex flex-col " 
     
          }
        >
          <AuthProvider>
          <Navbar/>
          {children}
          {footer}
          </AuthProvider>

        </body>

    </html>
  );
}
