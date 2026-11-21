import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RecipeShare | Discover and share recipes",
  description:
    "Discover delicious recipes, find inspiration for your next meal, and share the food you love.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />

        <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          {children}
        </main>

        <footer className="border-t border-[#eae3d9] bg-[#f4efe7]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
            <p className="text-sm font-semibold tracking-tight text-[#28251f]">
              RecipeShare<span className="text-[#bd593b]">.</span>
            </p>

            <p className="text-sm text-[#777168]">
              Good food brings people together.
            </p>

            <p className="text-xs text-[#938b80]">
              © 2026 RecipeShare
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}