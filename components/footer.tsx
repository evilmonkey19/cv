import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx"
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx"
import IconNoCopyright from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/no-copyright.tsx"


export default function Footer() {
  return (
    <div className="md:grid grid-cols-7 pb-4 flex flex-col gap-4 m-8">
      <div className="col-start-2 col-span-5 flex flex-col gap-4 items-center md:gap-0 md:flex-row text-[#bffcf9] justify-between w-full">
        <div className="flex-1">
          <h1 className="font-bold text-2xl">Enric Perpinyà Pitarch</h1>
          <p className="text(lg [#47817f])">Software Engineer</p>
        </div>
        <div className="flex-1 flex flex-col md:items-center">
          <h1 className="font-bold text-2xl">Contact</h1>
          <div className="flex flex-row gap-2">
            <a href="mailto:eperpinyapitarch@gmail.com"><IconMail class="inline-block" aria-hidden="true" /></a>
            <a href="https://linkedin.com/in/enric-perpinyà-pitarch-715088106"><IconBrandLinkedin class="inline-block" aria-hidden="true" /></a>
            <a href="https://github.com/evilmonkey19/"><IconBrandGithub class="inline-block" aria-hidden="true" /></a>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:items-end justify-start">
          <a href="https://fresh.deno.dev">
          <img
            width="180"
            height="20"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            alt="Made with Fresh"
          />
          </a>
        </div>
      </div>
      <p className="col-start-2 col-span-5 flex flex-row gap-2 justify-center items-center w-full text-[#bffcf9] text-xs">
        <IconNoCopyright />Free to use and to copy, but please give credit to the author.
      </p>
    </div>
  );
}
