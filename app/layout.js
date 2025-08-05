import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-outfit", 
});


export const metadata = {
    title: "Dev-Portfolio",
    description: "Developer Portfolio of JOSEPH AHMED",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${outfit.variable} bg-gradient-to-bl from-black-500 via-blue-50 to-white antialiased leading-6 overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
