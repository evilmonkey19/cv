import Frontal from "../components/frontal.tsx";
import AboutMe from "../components/aboutme.tsx";
import Skills from "../components/skills.tsx";
import Education from "../components/education.tsx";
import Projects from "../components/projects.tsx";
import Contact from "../components/contact.tsx";


export default function Home() {
  return (
    <div>
      <Frontal />
      <div className="flex flex-col items-center justify-center h-full gap-8">
        < AboutMe />
        < Education />
        < Skills />
        < Projects />
        < Contact />
      </div>
    </div>
  );
}
