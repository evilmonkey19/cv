import { PageProps } from "$fresh/server.ts";
// import 'animate.css';

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/favicon.ico" />
        <title>Enric Perpinyà - Home</title>
      </head>
      <body className="bg-black">
        <Component />
      </body>
    </html>
  );
}
