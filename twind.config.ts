import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      sans: 'IBM Plex Sans, Apple Color Emoji, sans-serif',

    },
  },
  preflight: {
    '@import': `url('https://fonts.cdnfonts.com/css/ibm-plex-sans')`,
  }
} as Options;

