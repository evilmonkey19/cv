import { LayoutProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: LayoutProps) {
  return (
    <div class="min-h-screen max-w-full h-full px-4 pb-12 sm:px-10">
      {/* <nav class="z-50 sticky top-0 py-4 bg-black border-b-1 border-white flex gap-10 justify-center content-center sm:gap-10">
        <a class="hover:opacity-75 [data-current]:(border(b-1 white) hover:border-transparent transition-colors duration-75) " href="/">Home</a>
      </nav> */}
      <Component {...state} />
    </div>
  )
}