/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      base22: ["22px", "22px"],

      base20: ["20px", "20px"],
      base18: ["18px", "18px"],
      base16: ["16px", "16px"],

      base14: ["14px", "14px"],
      base12: ["12px", "12px"],
      base11: ["1.168rem", "1.635rem"],
      base11_tab: ["1.133rem", "1.587rem"],
      small10: ["1.062rem", "1.487rem"],
      small9: ["0.951rem", "1.3rem"],
      small7: ["0.717rem", "1rem"],
    },

    colors: {
      bg: {
        primary: "#fbf1e7",
        secondary: "#f65d4e",
        white: "#ffffff",
        loader: "rgba(0, 0, 0, 0.05)",
        semiBlue: "#f4fbf2",
        semiPink: "#fef5f5",
        warning: "#eddb0e",
        blk: "#000000",

        bg_light_secondary: "#f6f6f6",
      },
      btn: {
        warning: "#FEE29A",
        primary: "#f65d4e",
        secondary: "#fbf1e7",
      },
      txt: {
        primary: "#282828",
        secondary: "#999999",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
