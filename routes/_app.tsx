import { PageProps } from "$fresh/server.ts";
import { State } from "../utils/types.ts";

// import 'animate.css';


export default function App({ Component, state }: PageProps) {
  const lang = state.lang as State["lang"];
  return (
    <html lang={lang}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hi!👋 This is Enric and i hope you like my personal website. Enjoy!" />
        <meta name="author" content="Enric Perpinyà" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" href="/fonts/IBMPlexSans-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
        <link rel="preload" href="/fonts/IBMPlexSans-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
        <title>Enric Perpinyà - Home</title>
      </head>
      <body className="bg-[#090909]">
        <Component />
      </body>
    </html>
  );
}
