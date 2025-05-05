import React from 'react'

export default function EventSection() {
  return (
    <div>
        <section>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16 lg:gap-32 lg:grid lg:grid-cols-2">
                    <div className="order-first md:order-last relative lg:self-center">
                        <div>
                            <img alt="A Cabalar employee serves up some food" loading="lazy" width="2880" height="1920" className="lg:rotate-3 lg:-ml-8 h-[20rem] md:h-[40vw] object-cover w-full max-h-[70rem] self-center rounded-img" sizes="70vw" src="https://static.bonniernews.se/ba/cf779870-c898-4fb4-b3cc-fc71deda8fb3.jpeg?crop=16%3A9&width=1400&format=pjpg&auto=webp"/></div>
                        </div>
                        <div className="flex flex-col items-start self-center max-w-4xl gap-6 md:gap-8">
                            <div className="flex flex-col gap-4 balance md:gap-6">
                                <p className='kicker'>Vi levererar stämningen.</p>
                                <h3 className="louder">Ni skapar magin.</h3>
                            </div>
                            <p>Hyr Husets exklusiva övervåning, en privat del av uteserveringen eller hela stället – skapa er egen oförglömliga upplevelse! </p>
                            <a href="/overvaningen" className="border-darkgreen px-6 py-3 text-base uppercase transition-colors border-2 rounded-full md:py-4 md:text-xl font-neue  hover:bg-green hover:text-white hover:bg-black">Övervåningen</a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
