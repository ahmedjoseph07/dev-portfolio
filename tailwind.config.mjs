/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
