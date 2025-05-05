import React from 'react'

export default function MenuSection() {
  return (
    <div>
        <section>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16 lg:gap-32 lg:grid lg:grid-cols-2">
                    <div className="order-first md:order-last relative lg:self-center">
                        <div>
                            <img alt="A burger and fries with a craft soda." loading="lazy" width="1088" height="827" className="lg:rotate-3 lg:-ml-8 h-[20rem] md:h-[40vw] object-cover w-full max-h-[70rem] self-center rounded-img" src="https://www.eatcabalar.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fa2bflsso%2Fproduction%2F7d7b02dd9ef6c4294ef0065326376de4fa7e658e-1088x827.jpg%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start self-center max-w-4xl gap-6 md:gap-8">
                        <div className="flex flex-col gap-4 balance md:gap-6">
                            <h6>Are you drooling yet?</h6>
                            <h3 className="balance">Check Out Our Menu</h3>
                        </div>
                        <p>The Cabalar menu is a delicious showcase of mouthwatering burgers, sandwiches, fries, and shakes, all made with the best ingredients. Indulge in our menu items that are designed to bring joy and satisfy your cravings.</p>
                        <a href="/menu" className="border-darkgreen px-6 py-3 text-base uppercase transition-colors border-2 rounded-full md:py-4 md:text-xl font-neue  hover:bg-green hover:text-white hover:border-green border-white">Read Our Menu</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
