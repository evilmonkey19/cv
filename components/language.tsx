import { State } from "../utils/types.ts";

const Language = (data: { lang: State["lang"] }) => {
  let url;
  if (data.lang === "en") {
    url = "/es";
  } else if (data.lang === "es") {
    url = "/ca";
  } else {
    url = "/en";
  }
  return (
    <a
      class="border-2 border-[#47817f] rounded-lg py-2 px-3 font-bold hover:bg-[#47817f] hover:text-[#bffcf9] transition-all bg-[#090909]"
      href={url}
    >
      {data.lang === "en" ? "EN" : data.lang === "es" ? "ES" : "CA"}
    </a>
  );
};
export default Language;