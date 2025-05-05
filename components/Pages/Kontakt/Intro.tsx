import React from 'react'

export default function Intro() {
  return (
    <div>
       <section className="relative flex flex-col gap-10 lg:gap-16 xl:gap-24 small">
        <div className="flex flex-col gap-6 text-center md:gap-8 lg:gap-16">
          <h1 className="flex flex-col gap-4 md:gap-6 mt-[6vw] md:mt-4">
          <span className="h4 balance">Kontakta oss</span>
          </h1>
          <div className="relative mx-auto max-w-[95rem]">
            <p className="mx-auto leading-tight xl:leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl balance">Frågor om restaurang, meny och samarbeten: hej@husetunderbarhimmel.se eller kontaktformuläret nedan.</p>
            <div className="absolute left-0 w-32 h-auto -bottom-16 lg:-bottom-24 lg:w-52 xl:w-96 -rotate-12"></div>
          </div>
          <div>
            <p className="mx-auto leading-tight xl:leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl balance">Praktiskt information:</p>
            <ul>
              <li className="mx-auto leading-tight xl:leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl balance"><p>Adress: Alsnäsgatan 11, 70215 Örebro</p></li>
              <li className="mx-auto leading-tight xl:leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl balance"><p>Huset ligger i mysiga Wadköping, precis bakom spelgårdens läktare i närheten av teaterladan, granne med stadsparken.</p></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
