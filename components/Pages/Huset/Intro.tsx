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
            <img alt="Chef preparing sandwiches and burgers." fetchPriority="high" width="1347" height="746" className="object-cover w-full rounded-img h-[70vh] md:h-[83vh]" src="https://www.eatcabalar.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fa2bflsso%2Fproduction%2F6ff7f47aac4eecd556ffd4991b4bec2e84d0efad-1347x746.jpg%3Frect%3D17%2C0%2C1298%2C746%26fit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"/>
        </section>
    </div>
  )
}
