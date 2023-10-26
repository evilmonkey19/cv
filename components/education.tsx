export default function Education() {
  return (
    <div className="text-[#bffcf9] w-full px-4 flex flex-col gap-2">
      <h1 className="text-4xl uppercase font-bold  col-span-1 text-left">Education</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 xl:grid grid-cols-5 xl:gap-0">
          <div className="col-span-4 flex flex-col gap-1">
            <h2 className="text-2xl">European Institute of Technology (EIT) &nbsp;🇪🇺</h2>
            <p className="text-lg text-[#47817f]"><span className="text-bold text-[#bffcf9]">Master</span>'s degree in ICT Innovation - speciality <span className="text-bold text-[#bffcf9]">Cloud and Network Infrastructures</span></p>
            <p className="text-xs text-[#47817f]">1 year at <span className="text-sm text-bold text-[#00c9c8]"> Aalto University 🇫🇮 </span> & 1 year at Kungliga Tekniska Högskolan - <span className="text-sm text-bold text-[#00c9c8]">KTH 🇸🇪</span></p>
          </div>
          <p className="col-span-1 text-sm text-[#47817f]">August 2022 - On going</p>
        </div>
        <div className="flex flex-col gap-4 xl:grid grid-cols-5 xl:gap-0">
          <div className="col-span-4 flex flex-col gap-1">
            <h2 className="text-2xl">Politechnical University of Catalonia (UPC)</h2>
            <p className="text-lg text-[#47817f]"><span className="text-bold text-[#bffcf9] text-xl">Bachelors</span>'s degree in Telecommunications Engineering - speciality <span className="text-xl text-bold text-[#bffcf9]">Telematics</span></p>
            <p className="text-xs text-[#47817f]">5 years at Escola Politècnica Superior d'Enginyers de Telecomunicacions de Barcelona<span className="text-sm text-bold text-[#00c9c8]"> ETSETB 🇪🇸 </span></p>
          </div>
          <p className="col-span-1 text-sm text-[#47817f]">September 2017 - May 2022</p>
        </div>
      </div>
    </div>
  )
}