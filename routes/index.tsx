import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Frontal from "../components/frontal.tsx";

export default function Home() {
  return (
    <div>
      <Frontal />
      <div className="flex flex-col items-center justify-center p-4 gap-8 text-white">
        Hello Yan!!! <div className="animate-ping">❤️</div>
      </div>
    </div>
  );
}
