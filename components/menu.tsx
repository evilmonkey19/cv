import Language from "../islands/language.tsx";
import { State } from "../utils/types.ts";
const Menu = (data: { lang: State["lang"] }) => (
  <div class="sticky top-2 left-4 w-min bg-black w-min rounded-lg z-10 text-[#bffcf9]">
    <Language lang={data.lang} />
  </div>
);
export default Menu;