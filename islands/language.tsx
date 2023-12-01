import { State } from "../utils/types.ts";

const Language = (data: { lang: State["lang"] }) => {
  return (
    <button
      class="border-2 border-[#47817f] rounded-lg py-2 px-3 font-bold hover:bg-[#47817f] hover:text-[#bffcf9] transition-all bg-black"
      onClick={() => {
        if (data.lang === "en") {
          document.cookie = "lang=es";
        } else if (data.lang === "es") {
          document.cookie = "lang=ca";
        } else {
          document.cookie = "lang=en";
        }
        location.reload();
      }}
    >
      {data.lang === "en" ? "EN" : data.lang === "es" ? "ES" : "CA"}
    </button>
  );
};
export default Language;