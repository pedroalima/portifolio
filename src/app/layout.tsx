import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/client-view/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
    icons: {
        icon: ["/favicon.ico?v=4"],
        apple: ["/apple-touch-icon.png?v=4"],
        shortcut: ["/apple-touch-icon.png"]
    }
};

export default function RootLayout({ children } : { children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
