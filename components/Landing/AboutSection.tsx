import React from 'react'

const AboutSection = () => {
  return (
    <div>
        <section>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16 lg:gap-32 lg:grid lg:grid-cols-2">
                    <div className=" relative lg:self-center">
                        <div>
                            <img alt="" loading="lazy" className="lg:-rotate-3 lg:ml-8 h-[20rem] md:h-[40vw] object-cover w-full max-h-[70rem] self-center rounded-img" sizes="70vw" src="https://static.bonniernews.se/ba/184cb478-8bc9-4887-8e75-a566c19777bc.jpeg?crop=6516%2C3665%2Cx0%2Cy239&width=1440&format=pjpg&auto=webp"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start self-center max-w-4xl gap-6 md:gap-8">
                        <div className="flex flex-col gap-4 balance md:gap-6">
                            <h6>Allt börjar med en</h6>
                            <h3 className="balance">Vision</h3>
                        </div>
                        <p>Här kan ni skriva något kort om er historia och osv osv, ni fattar - det vanliga "bla bla" etc.</p>
                        <a href="/about" className="border-darkgreen px-6 py-3 text-base uppercase transition-colors border-2 rounded-full md:py-4 md:text-xl font-neue  hover:bg-green hover:text-white hover:bg-black">Läs mer om Huset</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSection