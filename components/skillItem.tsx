import { h } from "https://deno.land/x/fresh/mod.ts";

interface SkillItemProps {
  icon: string;
  skillName: string;
  skillLevel: number;
}

export const SkillItem = ({ icon, skillName, skillLevel }: SkillItemProps) => (
  h('div', { class: 'flex flex-row justify-between text-lg text-[#bffcf9] w-40' }, [
    h('div', { class: 'flex flex-row gap-2 items-center' }, [
      icon,
      h('p', null, skillName)
    ]),
    h('div', { class: 'font-sans' }, skillLevel)
  ])
);