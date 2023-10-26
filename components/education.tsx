import { Translation } from "../utils/types.ts";

const Education = (data: { translation: Translation["education"] }) => (
  <div className="text-[#bffcf9] w-full px-4 flex flex-col gap-2">
  <h1 className="text-4xl uppercase font-bold  col-span-1 text-left">{data.translation.title}</h1>
  <div className="flex flex-col gap-8">
    { data.translation.degrees.map((degree) =>
      <div className="flex flex-col gap-4 xl:grid grid-cols-5 xl:gap-0">
        <div className="col-span-4 flex flex-col gap-1">
          <h2 className="text-2xl">{degree.university}</h2>
          <p className="text-lg text-[#47817f]">
            {degree.degree.split(' ').map((word, index) => 
              degree['degree-keywords'].includes(word) 
                ? <span key={index} className="font-bold text-[#bffcf9]">{word}</span> 
                : word
            ).reduce((prev, curr, i) => 
              i === 0 ? [curr] : [prev, ' ', curr], 
              []
            )}
          </p>
          <p className="text-xs text-[#47817f]">
            {degree["more-info"].split(' ').map((word, index) => 
              degree['keywords-more-info'].includes(word) 
                ? <span key={index} className="text-sm text-[#00c9c8]">{word}</span> 
                : word
            ).reduce((prev, curr, i) => 
              i === 0 ? [curr] : [prev, ' ', curr], 
              []
            )}
          </p>
          <p className="text-xs text-[#00c9c8]">{degree["web-text"]}: <a href={degree.href} className="underline text-[#47817f] hover:text-[#bffcf9]">https://masterschool.eitdigital.eu/</a></p>
        </div>
        <p className="col-span-1 text-sm text-[#47817f]">{degree.date}</p>
      </div>
    )}
  </div>
</div>
);

export default Education;