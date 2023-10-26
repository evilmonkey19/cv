export default function Projects() {
  const projects = [
    { 
      name: "Engresca't",
      description: "Engrescat is a contest held in Barcelona by Telecogresca, the biggest university festival organized by university students in Spain, which brings over 15 000 people. I made this website for deciding the finalist who will be able to perform at the festival. I made it using Wagtail - Django and DaisyUI - TailwindCSS as the main frameworks/ libraries. There is an admin panel to control the phases, editions, contestants, and all the business logic and the content of the website itself.",
      href: "https://engrescat.org",
      repo: "",
      tags: ["Python", "Django", "Wagtail", "Full-stack", "TailwindCSS", "CI/CD"],
    },
    {
      name: "Namubufferi",
      description: "I designed an internal website for Athene Guild at Aalto University. I made it for managing the fridge inside the guild. It handles all the transactions and the payment gateway using MobilePay (the mobile payment system in Finland).There is as well unit-testing done which is run in the CI/CD pipeline. It uses Django and tailwindCSS.",
      href: "https://namubufferi.fi",
      repo: "https://github.com/athenekilta/namubufferi/tree/cleanage",
      tags: ["Python", "Django", "Full-stack", "TailwindCSS", "CI/CD"],
    },
    {
      name: "This.website",
      description: "",
      href: "https://perpinya.eu",
      repo: "https://github.com/evilmonkey19/cv",
      tags: ["Typescript", "Deno", "Fresh", "TailwindCSS", "Full-stack", "CI/CD"],
    },
    {
      name: "messiah.com",
      description: "I designed a static website for a barbershop in Barcelona. It was one of my first projects. I made it using HTML (Pug), CSS (Stylus), and pure Javascript. It is deploy in Cloudflare Pages.",
      href: "https://mess1ah.com",
      repo: "https://github.com/evilmonkey19/mess1ah",
      tags: ["HTML", "CSS", "Javascript", "Frontend", "Stylus", "Pug"],
    }
  ];
  return (
    <div className="flex flex-col gap-4 w-full px-4">
      <h1 className="text-3xl text-[#bffcf9] uppercase">Projects</h1>
      <div className="flex flex-col xl:grid grid-cols-2 gap-8">
        {projects.map((project) => (
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
}