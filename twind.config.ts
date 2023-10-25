import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      sans: 'Work Sans, Noto Color Emoji, sans-serif',

    },
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;600&family=Noto+Color+Emoji&display=swap')`,
  }
} as Options;

