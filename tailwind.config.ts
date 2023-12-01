import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', '"Apple Color Emoji"', 'sans-serif'],
    },
  },
} as Config;