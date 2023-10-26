import { LayoutProps } from "$fresh/server.ts";
import Footer from "../components/footer.tsx";
import Menu from "../components/menu.tsx";

import { State } from "../utils/types.ts";

export default function Layout({ Component, state }: LayoutProps) {
  const lang = state.lang as State["lang"];
  const translation = state.translation as State["translation"];

  return (
    <div>
      <Menu lang={lang} />
      <div className="md:grid grid-cols-7 m-4">
        <div className="col-span-1"></div>
        <div className="col-start-2 col-span-5">
          <Component {...state} />
        </div>
        <div className="col-span-1"></div>
      </div>
      <Footer translation={translation.footer}/>
    </div>
  )
}
