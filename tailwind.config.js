module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
      },
      colors: {
        blueMarguerite: "#7161C5",
        activePurple: "#604CC5",
        hoverPurple: "#4F4099",
        clickPurple: "#3B3077",
        lightPurple: "#F2EFFF",
        lavender: "#F9F8FF",
        midPurple: "#ACA5D6",
        lightGray: "#9E9E9E",
        jetBlack: "#1A1A1A",
        midBlack: "#2B2B2B",
      },
      spacing: {
        safe: "5rem",
      },
      animation: {
        "error-shake": "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
