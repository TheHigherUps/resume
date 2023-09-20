/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                react: {
                    to: { transform: "rotate(360deg)" },
                },
            },
            animation: {
                react: "react 15s linear infinite",
            },
        },
    },
    plugins: [],
}
