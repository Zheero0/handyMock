import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
  title: "Handy",
  description: "Connecting Odd Jobs and Skilled Proffesionals",
};

const header = (
  <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
    <Link href={"/"}>
      <h1
        className={"text-base sm:text-lg textGradient " + geistSans.className}
      >
        Handy
      </h1>
    </Link>
    <Link href={"/dashboard"}>Dashboard</Link>
  </header>
);

const footer = (
  <footer className="p-4 sm:p-8 grid place-items-center">
    <div>
      footer
    </div>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">

        <body
          className={
            "w-full max-w-[100vw] mx-auto text-sm sm:text-base min-h-screen flex flex-col " +
            geistMono.className
          }
        >
          {header}
          {children}
          {footer}
        </body>

    </html>
  );
}
