import { LayoutProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: LayoutProps) {
  return (
    <div className="md:grid grid-cols-7 pb-20 m-4">
      <div className="col-span-1"></div>
      <div className="col-start-2 col-span-5">
        <Component {...state} />
      </div>
      <div className="col-span-1"></div>
        {/* <nav class="z-50 sticky top-0 py-4 bg-black border-b-1 border-white flex gap-10 justify-center content-center sm:gap-10">
        <a class="hover:opacity-75 [data-current]:(border(b-1 white) hover:border-transparent transition-colors duration-75) " href="/">Home</a>
      </nav> */}
    </div>
  )
}