/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultConfig");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            ...defaultTheme,
            colors: {
                ...defaultTheme.colors,
                mainText: "#4A4A4A",
                secondText: "#A78963",
                thirdText: "#FFFFFF",
                fourth: "#A1A1A1",
                bannerContent: "rgb(161, 161, 161)",

                mainTextHover: "#674F31",
                secondTextHover: "#A78963",

                mainBg: "#FFFFFF",
                secondBg: "#05090E",
                thirdBg: "#856842",
                bgInputForm: "#F9EF9F",
                red: "#be123c",
                aqua: "#23D5AE",
            },
            screens: {
                mobile: "430px",
                minSm: "520px",
                desktopLg: "1480px",
                desktop: "1504px",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                blurBlack: {
                    from: { opacity: "0" },
                    to: { opacity: "0.55" },
                },
                scalePluse: {
                    from: { transform: "scale(0)" },
                    to: { transform: "scale(1)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 600ms ease-in-out forwards",
                fadeInDropMenu: "fadeIn 1s ease-out forwards",
                blurBlack: "blurBlack 330ms ease-in-out forwards",
                scalePluse: "scalePluse 330ms linear forwards",
            },
        },
    },
    plugins: [],
};
