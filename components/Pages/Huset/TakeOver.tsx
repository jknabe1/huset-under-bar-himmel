import React from 'react'

export default function TakeOver() {
  return (
    <div>
        <section>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16 lg:gap-32 lg:grid lg:grid-cols-2">
                    <div className=" relative lg:self-center">
                        <div>
                            <img alt="Cabalar food truck parked in front of building" loading="lazy" width="2880" height="1940" className="lg:-rotate-3 lg:ml-8 h-[20rem] md:h-[40vw] object-cover w-full max-h-[70rem] self-center rounded-img" sizes="70vw" src="https://www.hakanpettersson.se/images/blogg/ore22_spelgarden.jpg"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start self-center max-w-4xl gap-6 md:gap-8">
                        <div className="flex flex-col gap-4 balance md:gap-6">
                            <p className='kicker'>Gör en takeover</p>
                            <h3 className="louder">Abonnera</h3>
                        </div>
                        <p>Vill du abonnera Husets exklusiva övervåningen, egen del av vår uteservering eller varför inte hela Huset?</p>
                        <a href="/overvaningen" className="border-darkgreen px-6 py-3 text-base uppercase transition-colors border-2 rounded-full md:py-4 md:text-xl hover:bg-black hover:text-white border-black">Läs mer här</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
