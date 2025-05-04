import React from 'react'

const AboutSection = () => {
  return (
    <div>
        <section>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16 lg:gap-32 lg:grid lg:grid-cols-2">
                    <div className=" relative lg:self-center">
                        <div>
                            <img alt="Steve Cabalar cooking" loading="lazy"className="lg:-rotate-3 lg:ml-8 h-[20rem] md:h-[40vw] object-cover w-full max-h-[70rem] self-center rounded-img" sizes="70vw" src="https://www.eatcabalar.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fa2bflsso%2Fproduction%2F6b3ef8f788276d4cd9923b1d6406492893b0df32-6048x4024.jpg%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"/>
                        </div>
                        <img alt="" loading="lazy" className="max-w-48 w-[20vw] lg:w-[10vw] h-auto absolute -rotate-12 bottom-[-10%] left-[10%]" sizes="30vw" src="https://www.eatcabalar.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fa2bflsso%2Fproduction%2Fdd2e1dcfd60f15fbdf7fa10a3b62613ae51a687e-176x104.svg%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"/>
                    </div>
                    <div className="flex flex-col items-start self-center max-w-4xl gap-6 md:gap-8">
                        <div className="flex flex-col gap-4 balance md:gap-6">
                            <h6>Everybody Loves</h6>
                            <h3 className="balance">A Good Story</h3>
                        </div>
                        <p>Steve Cabalar was no ordinary high school graduate. He finished high school at the age of 12, leaving everyone in awe of his genius and ambition. At 14, he conquered culinary arts school and opened Lancaster’s beloved burger spot, Cabalar Meat Co. in 2018. Or at least that is what the legends say.</p>
                        <a href="/about" className="border-darkgreen px-6 py-3 text-base uppercase transition-colors border-2 rounded-full md:py-4 md:text-xl font-neue  hover:bg-green hover:text-white hover:border-green">Learn more about us</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSection