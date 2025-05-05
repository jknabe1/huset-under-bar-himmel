import React from 'react'

export default function Intro() {
  return (
    <div>
        <section className="relative flex flex-col gap-10 lg:gap-16 xl:gap-24 small">
            <div className="flex flex-col gap-6 text-center md:gap-8 lg:gap-16">
                <h1 className="flex flex-col gap-4 md:gap-6 mt-[6vw] md:mt-4">
                    <span className="kicker balance">Gör en takeover</span>
                    <span className="louder">Abonnera huset</span>
                </h1>
                <div className="relative mx-auto max-w-[95rem]">
                    <p className="mx-auto leading-tight xl:leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl balance">Vill du bjuda på en smakresa på Örebros finaste läge? Då har du kommit helt rätt! Du kan abonnera Husets exklusiva övervåning, en egen del av vår uteservering eller hela Huset. </p>
                </div>
            </div>
            <img alt="Cabalar Food Truck" width="2880" height="1920" className="object-cover w-full rounded-img h-[70vh] md:h-[83vh]" src="https://www.hakanpettersson.se/images/blogg/ore22_spelgarden.jpg"/>
        </section>
    </div>
  )
}
