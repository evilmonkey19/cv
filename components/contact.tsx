import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx"
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx"
import { Translation } from "../utils/types.ts";

const Contact = (data: { translation: Translation["contact"] }) => (
  <div className="flex flex-col gap-2 text-[#bffcf9] w-full p-4 rounded-xl border-2 border-[#bffcf9]">
    <h1 className="w-min text-3xl uppercase font-bold">{data.translation.title}</h1>
    <div className="xl:grid grid-cols-8 items-center">
      <p className="text-lg col-span-1 w-min flex flex-row items-center gap-2">
        <IconMail class="inline-block" aria-hidden="true" />
        Email:
      </p> 
      <a href="mailto:eperpinyapitarch@gmail.com" className="col-span-7 hover:text-[#47817f]">eperpinyapitarch@gmail.com</a>
    </div>
    <div className="xl:grid grid-cols-8 items-center">
      <p className="text-lg col-span-1 w-min flex flex-row items-center gap-2">
        <IconBrandLinkedin class="inline-block" aria-hidden="true" />
        Linkedin:
      </p>
      <a href="https://linkedin.com/in/enric-perpinyà-pitarch-715088106" className="col-span-7 hover:text-[#47817f]">https://linkedin.com/in/enric-perpinyà-pitarch-715088106</a>
    </div>
    <div className="xl:grid grid-cols-8 items-center">
      <p className="text-lg col-span-1 w-min flex flex-row items-center gap-2">
        <IconBrandGithub class="inline-block" aria-hidden="true" />
        Github:
      </p>
      <a href="https://github.com/evilmonkey19/" className="col-span-7 hover:text-[#47817f]">@evilmonkey19</a>
    </div>
  </div>
);

export default Contact;