import { Translation } from "../utils/types.ts";

const AboutMe = (data: { translation: Translation["me"] }) => (
  <div className="border([#bffcf9] 2) rounded-xl p-4 text-[#bffcf9] flex flex-col gap-2">
    <h1 className="text-3xl uppercase font-bold col-span-1 text-left">{data.translation.title}</h1>
    <p className="text-lg col-start-2 text-left">
      {data.translation.description.split(' ').map((word, index) => 
        data.translation.keywords.includes(word) 
          ? <span key={index} className="font-bold text-[#00c9c8]">{word}</span> 
          : word
      ).reduce((prev, curr, i) => 
        i === 0 ? [curr] : [prev, ' ', curr], 
        []
      )}
    </p>
  </div>
);

export default AboutMe;