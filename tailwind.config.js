module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        typography: (theme) => ({}),
        extend: {},
        colors: {
            primary: {
                DEFAULT: "#FFFFFF",
                dark: "#2B3743",
            },
            secondary: {
                DEFAULT: "#FAFAFA",
                dark: "#202D36",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
    darkMode: "class",
};
