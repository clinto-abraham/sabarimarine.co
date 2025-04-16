import "@/styles/globals.scss";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sabari Marine Enterprise | Welcomes you",
  description:
    "Freight Forwarding and shipping channeling services at your door steps",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// import { queryClient } from "@/lib/react-hook-form/queryClient";
// import { QueryClientProvider } from "@/lib/tanstack-query/react-query";
// import { Provider } from "react-redux";
// import { store } from "@/lib/redux/store";
// import { ThemeProvider } from "./context/ThemeContext";
