import Language from "./language.tsx";
import { State } from "../utils/types.ts";
import IconFileCv from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/file-cv.tsx"

const Menu = (data: { lang: State["lang"] }) => (
  <div className="fixed top-2 left-4 h-full z-50">
    <div className="w-min rounded-lg text-[#bffcf9] flex flex-col md:flex-row gap-2">
      <Language lang={data.lang}/>
      <a
        href={`/cv-${data.lang}.pdf`}
        target="_blank"
        class="border-2 border-[#47817f] rounded-lg py-2 px-3 font-bold hover:bg-[#47817f] hover:text-[#bffcf9] transition-all bg-[#090909]"
      >
        <IconFileCv class="w-6 h-6" aria-label="CV"/>
      </a>
    </div>
  </div>
);
export default Menu;