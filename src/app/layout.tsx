import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AppQueryClientProvider from "@/providers/AppQueryClientProvider";
import NextProgressBar from "@/providers/NextProgressBar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next14 Movies DB",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111111] `}>
        <AppQueryClientProvider>
          <NextProgressBar>
            <Navbar />
            <main className=" pb-20 sm:pb-10  text-white h-full  ">
              {children}
            </main>
          </NextProgressBar>
        </AppQueryClientProvider>
      </body>
    </html>
  );
}