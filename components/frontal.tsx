import { useState, useEffect } from "preact/hooks";
import { Translation } from "../utils/types.ts";

const Frontal = (data: { translation: Translation["frontal"] }) => (


  <div class="h-full" style="height: 100svh;">
    <p className="text-white"></p>
    <div class="flex flex-col items-center justify-center h-full gap-8 w-full">
      <div class="flex justify-center p-4">
        <picture>
          <source media="print" srcset="about_me.webp"/>
        <img 
          srcset="
          about_me-300.webp 300w,
          about_me.webp
          "
          sizes="
            (max-width: 768px) 300px,
            100vw
          "
          alt="This is a photo about me, Enric :D" 
          class="rounded-full w-64 md:w-96" 
        />
        </picture>
      </div>
      <div className="flex flex-col p-4 align-left">
        <div className="text-3xl md:text-4xl text-[#bffcf9]">
          {data.translation.title} <div className="animate__animated animate__jackInTheBox inline-block">👋</div>
        </div>
        <div className="animate__animated animate__headShake animate__delay-1s">
          <p className="text-lg md:text-xl text-[#bffcf9]">{data.translation.subtitle}</p>
        </div>
      </div>
    </div>
    <div className="absolute left-0 bottom-10 flex flex-row justify-center w-full animate__animated animate__slideInDown animate__delay-1s animate__slow">
      <svg fill="#fff5f9" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_229_" d="M253.858,234.26c-2.321-5.605-7.791-9.26-13.857-9.26h-60V15c0-8.284-6.717-15-15-15 c-8.285,0-15,6.716-15,15v210H90c-6.067,0-11.537,3.655-13.859,9.26c-2.32,5.605-1.037,12.057,3.252,16.347l75,75 C157.323,328.536,161.16,330,165,330c3.838,0,7.678-1.464,10.605-4.394l75-75C254.897,246.316,256.18,239.865,253.858,234.26z"></path> </g></svg>
    </div>
  </div>
);

export default Frontal;