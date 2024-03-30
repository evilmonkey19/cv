import IconBrandPython from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-python.tsx"
import IconBrandTypescript from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-typescript.tsx"
import IconCoffee from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/coffee.tsx"
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/lemon-2.tsx";
import IconBrandGit from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-git.tsx"
import IconBrandAws from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-aws.tsx"
import IconBrandDjango from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-django.tsx"
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-deno.tsx"
import IconTerminal2 from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/terminal-2.tsx"

import { Translation } from "../utils/types.ts";
import { JSX } from "preact";

type Props = {
  text: Translation["skills"];
  mark: number;
  children: JSX.Element;
};

const Skill = ( { text, mark, children }: Props ) => {
  return (
    <div className="flex flex-row justify-between text-lg text-[#bffcf9] w-40">
      <div className="flex flex-row gap-2 items-center">
        {children}
        <p>{text}</p>
      </div>
      <div className="font-sans">{mark}</div>
    </div>
  );
};

const Skills = (data: { translation: Translation["skills"] }) => (
  <div className="px-4 text-[#bffcf9] w-full flex flex-col gap-4">
      <h1 className="text-xl uppercase font-bold">{data.translation}</h1>
      <div className="flex flex-row flex-wrap xl:grid grid-cols-5 justify-between gap-4 xl:gap-0">
        <div className="flex flex-col gap-1 xl:col-start-1">
          <Skill text="Python" mark={10} >
            <IconBrandPython class="inline-block" aria-hidden="true" />
          </Skill>
          <Skill text="Typescript" mark={8} >
            <IconBrandTypescript class="inline-block" aria-hidden="true" />
          </Skill>
          <Skill text="Java" mark={7} >
            <IconCoffee class="inline-block" aria-hidden="true" />
          </Skill>
        </div>
        <div className="flex flex-col gap-1 xl:col-start-3">
          <Skill text="Django" mark={10} >
            <IconBrandDjango class="inline-block" aria-hidden="true" />
          </Skill>
          <Skill text="Deno" mark={8} >
            <IconBrandDeno class="inline-block" aria-hidden="true" />
          </Skill>
          <Skill text="Fresh" mark={7} >
            <LemonIcon class="inline-block" aria-hidden="true" />
          </Skill>
        </div>
        <div className="flex flex-col gap-1 xl:col-start-5">
          <Skill text="AWS" mark={7} >
            <IconBrandAws class="inline-block" aria-hidden="true" />
          </Skill>
          <Skill text="Linux/bash" mark={9} >
            <IconTerminal2 class="inline-block" aria-hidden="true" />
          </Skill>
          <Skill text="Git" mark={9} >
            <IconBrandGit class="inline-block" aria-hidden="true" />
          </Skill>
        </div>
      </div>
    </div>
);

export default Skills;