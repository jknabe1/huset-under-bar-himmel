import React from 'react'

export default function Intro() {
  return (
    <div>
        <section className="relative flex flex-col gap-10 lg:gap-16 xl:gap-24 small">
            <div className="flex flex-col gap-6 text-center md:gap-8 lg:gap-16">
                <h1 className="flex flex-col gap-4 md:gap-6 mt-[6vw] md:mt-4">
                    <span className="kicker">Välkommen in i värmen</span>
                    <span className="louder">Huset</span>
                </h1>
                <div className="relative mx-auto max-w-[95rem]"></div>
            </div>
            <img alt="Chef preparing sandwiches and burgers." fetchPriority="high" width="1347" height="746" className="object-cover w-full rounded-img h-[70vh] md:h-[83vh]" src="https://www.visitorebro.se/wp-content/uploads/2020/08/Skyltar-i-Wadk%C3%B6ping-scaled-1170x660.jpg"/>
        </section>
    </div>
  )
}
