import { Translation } from "../utils/types.ts";

const Projects = (data: { translation: Translation["projects"] }) => (
  <div className="flex flex-col gap-4 w-full px-4">
    <h1 className="text-3xl text-[#bffcf9] uppercase">{data.translation.title}</h1>
    <div className="flex flex-col xl:grid grid-cols-2 gap-8">
      {data.translation.projects.map((project) => (
      <div className="border([#bffcf9] 2 dotted) rounded-xl p-4 text-[#bffcf9] flex flex-col justify-between gap-4">
        <div className="relative flex flex-col gap-2">
          <h1 className="text-2xl">{project.name}</h1>
          <a href={project.href} className="underline text(lg [#00c9c8]) hover:text-[#47817f] w-min">{project.href}</a>
          <p className="text-sm">{project.description}</p>
          { project.repo && (
            <a href={project.repo} className="absolute top-0 right-0 w-min text(xs [#00c9c8]) border(2 [#47817f]) rounded-full py-1 px-2 underline hover:bg-[#47817f])">Github</a>
            )}
        </div>
        <div className="flex flex-row flex-wrap gap-2 text-xs text-[#00c9c8]">
        {project.tags.map((tag) => (
          <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">{tag}</p>
        ))}
        </div>
      </div>
      ))}
    </div>
  </div>
);

export default Projects;