import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./_providers/auth";
import Footer from "./_components/footer";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <NextAuthProvider>
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
