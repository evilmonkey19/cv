export default function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full px-4">
      <h1 className="text-3xl text-[#bffcf9] uppercase">Projects</h1>
      <div className="flex flex-col xl:grid grid-cols-2 gap-8">
        <div className="border([#bffcf9] 2 dotted) rounded-xl p-4 text-[#bffcf9] flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Engresca't</h1>
            <a href="https://engrescat.org" className="underline text(lg [#00c9c8]) hover:text-[#47817f] w-min">https://engrescat.org</a>
            <p className="text-sm">Engrescat is a contest held in Barcelona by Telecogresca, 
            the biggest university festival organized by university students in Spain, which brings over 15 000 people. 
            I made this website for deciding the finalist who will be able to perform at the festival. 
            I made it using Wagtail - Django and DaisyUI - TailwindCSS as the main frameworks/ libraries. 
            There is an admin panel to control the phases, editions, contestants, 
            and all the business logic and the content of the website itself.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 text-xs text-[#00c9c8]">
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Python</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Django</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Wagtail</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Full-stack</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">TailwindCSS</p>
          </div>
        </div>
        <div className="border([#bffcf9] 2 dotted) rounded-xl p-4 text-[#bffcf9] flex flex-col justify-between gap-4">
          <div className="relative flex flex-col gap-2">
            <h1 className="text-2xl">Namubufferi</h1>
            <a href="https://github.com/athenekilta/namubufferi/tree/cleanage" className="absolute top-0 right-0 w-min text(xs [#00c9c8]) border(2 [#47817f]) rounded-full py-1 px-2 underline hover:bg-[#47817f])">Github</a>
            <a href="https://namubufferi.fi" className="underline text(lg [#00c9c8]) hover:text-[#47817f] w-min">https://namubufferi.fi</a>
            <p className="text-sm">I designed an internal website for Athene Guild at Aalto University. 
              I made it for managing the fridge inside the guild. 
              It handles all the transactions and the payment gateway using MobilePay (the mobile payment system in Finland).
              There is as well unit-testing done which is run in the CI/CD pipeline.
              It uses Django and tailwindCSS.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 text-xs text-[#00c9c8]">
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Python</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Django</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Full-stack</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">TailwindCSS</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">CI/CD</p>
          </div>
        </div>
        <div className="border([#bffcf9] 2 dotted) rounded-xl p-4 text-[#bffcf9] flex flex-col justify-between gap-4">
          <div className="relative flex flex-col gap-2">
            <h1 className="text-2xl">This.website</h1>
            <a href="https://perpinya.eu" className="underline text(lg [#00c9c8]) hover:text-[#47817f] w-min">https://perpinya.eu</a>
            <a href="https://github.com/evilmonkey19/cv" className="absolute top-0 right-0 w-min text(xs [#00c9c8]) border(2 [#47817f]) rounded-full py-1 px-2 underline hover:bg-[#47817f])">Github</a>
            <p className="text-sm">
              I wanted to sharpen my skills in web development, so I decided to make my own website.
              I made it using Deno and Fresh. I used TailwindCSS for the styling. It is hosted in Deno Deploy.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 text-xs text-[#00c9c8]">
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Typescript</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Deno</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Fresh</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">TailwindCSS</p>
            <p className="border(2 [#00c9c8]) py-1 px-2 rounded-full">Full-stack</p>
          </div>
        </div>
      </div>
    </div>
  )
}