import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Frontal from "../components/frontal.tsx";
import AboutMe from "../components/aboutme.tsx";
import Skills from "../components/skills.tsx";


export default function Home() {
  return (
    <div>
      <Frontal />
      <div className="flex flex-col items-center justify-center h-full gap-8">
        < AboutMe />
        < Skills />
      </div>
      {/* < Skills />
      < Education />
      < Projects />
      < Contact /> */}
    </div>
  );
}
