import { heroui } from "@heroui/react";

    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      darkMode: "class",
      plugins: [
        heroui({
          themes: {
            dark: {
              colors: {
                background: "#121212",
                foreground: "#ECEDEE",
                primary: {
                  50: "#3B096C",
                  100: "#520F83",
                  200: "#7318A2",
                  300: "#9823C2",
                  400: "#c031e2",
                  500: "#DD62ED",
                  600: "#F182F6",
                  700: "#FCADF9",
                  800: "#FDD5F9",
                  900: "#FEECFE",
                  DEFAULT: "#DD62ED",
                  foreground: "#FFFFFF"
                },
                focus: "#F182F6"
              }
            }
          }
        })
      ],
    };