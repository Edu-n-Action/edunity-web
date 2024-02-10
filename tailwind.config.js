/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        darkgrey200: "#202832",
        darkgrey: "#2F3A47",
        greenYellow: "#CEFD4A",
      },
    },
    fontFamily: {
      product: ['"Product Sans"', "Poppins"],
    },
  },
  plugins: [],
};
