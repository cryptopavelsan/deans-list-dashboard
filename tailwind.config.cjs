/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tt: "var(--font-tt)",
        space: "var(--font-space)",
      },
      daisyui: {
        styled: true,
        // TODO: Theme needs works
        themes: [
          {
            deanslist: {
              /* your theme name */
              letterSpacing: {
                tightest: "-.075em",
                tighter: "-.05em",
                tight: "-.03em",
                normal: "0",
                wide: ".03em",
                wider: ".05em",
                widest: ".1em",
                widest: ".25em",
              },
              primary: "#2c3e50",
              "primary-hover": "#283448",
              "primary-active": "#233240",
              "primary-dark": "#212f3c",
              "primary-dark-hover": "#1a2530",
              "primary-dark-active": "#141c24",
              "primary-darker": "#0f161c",
              "primary-content": "#ffffff",
              "primary-light": "#eaecee",
              "primary-light-hover": "#dfe2e5",
              "primary-light-active": "#bec3c9",

              secondary: "#3498db",
              "secondary-hover": "#2f89c5",
              "secondary-active": "#2a7aaf",
              "secondary-dark": "#2772a4",
              "secondary-dark-hover": "#1f5b83",
              "secondary-dark-active": "#174463",
              "secondary-darker": "#12354d",
              "secondary-content": "#ffffff",
              "secondary-light": "#ebf5fb",
              "secondary-light-hover": "#e1f0fa",
              "secondary-light-active": "#c0dff4",

              accent: "#f1c40f",
              "accent-hover": "#d9b00e",
              "accent-active": "#c19dDc",
              "accent-dark": "#b5930b",
              "accent-dark-hover": "#917609",
              "accent-dark-active": "#6c5807",
              "accent-darker": "#544505",
              "accent-content": "#ffffff",
              "accent-light": "#fef9e7",
              "accent-light-hover": "#fdf6db",
              "accent-light-active": "#fbedb5",

              neutral: "#bdc3c7",
              "neutral-hover": "#aab0b3",
              "neutral-active": "#979c9f",
              "neutral-dark": "#8e9295",
              "neutral-dark-hover": "#717577",
              "neutral-dark-active": "#55585a",
              "neutral-darker": "#424446",
              "neutral-content": "#ffffff",
              "neutral-light": "#f8f9f9",
              "neutral-light-hover": "#f5f6f7",
              "neutral-light-active": "#ebecee",

              "base-100": "#181818",
              "base-200": "#35363a",
              "base-300": "#222222",
              "base-content": "#f9fafb",

              info: "#1ABC9C",
              "info-dark": "#148B74",
              "info-light": "#1dd2af",

              success: "#27AE60",
              "success-dark": "#1C7E45",
              "success-light": "#2ECC71",

              warning: "#f39c12",
              "warning-dark": "#c87f0a",
              "warning-light": "#f5b041",

              error: "#e74c3c",
              "success-dark": "#b53428",
              "success-light": "#ea6459",
            },
          },
          // backup themes:
          // 'dark',
          // 'synthwave'
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
      },
    },
  },
  plugins: [require("daisyui")],
};
