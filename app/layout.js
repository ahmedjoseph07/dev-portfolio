import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-outfit",
});

export const metadata = {
    title: "Portfolio",
    description: "Developer Portfolio of JOSEPH AHMED",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body
                className={`${outfit.variable} antialiased leading-6 overflow-x-hidden`}>
                <ThemeProvider attribute="class" defaultTheme="light">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
