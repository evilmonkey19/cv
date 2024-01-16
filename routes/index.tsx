import Frontal from "../components/frontal.tsx";
import AboutMe from "../components/me.tsx";
import Skills from "../components/skills.tsx";
import Education from "../components/education.tsx";
import Projects from "../components/projects.tsx";
import Contact from "../components/contact.tsx";

import { State } from "../utils/types.ts";
import { RouteContext } from "$fresh/server.ts";


const Index = (ctx: RouteContext) => {
  const translation = ctx.state.translation as State["translation"];

  return (
    <div>
      <Frontal translation={translation.frontal} />
      <div className="flex flex-col items-center justify-center h-full gap-8">
        < AboutMe translation={translation.me} />
        < Education translation={translation.education} />
        < Skills translation={translation.skills} />
        < Projects translation={translation.projects} />
        < Contact translation={translation.contact} />
      </div>
    </div>
  );
}

export default Index;