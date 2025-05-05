import React from 'react'

export default function TakeOver() {
  return (
    <div>
        <section>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16 lg:gap-32 lg:grid lg:grid-cols-2">
                    <div className=" relative lg:self-center">
                        <div>
                            <img alt="Cabalar food truck parked in front of building" loading="lazy" width="2880" height="1940" className="lg:-rotate-3 lg:ml-8 h-[20rem] md:h-[40vw] object-cover w-full max-h-[70rem] self-center rounded-img" sizes="70vw" src="https://www.eatcabalar.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fa2bflsso%2Fproduction%2Ff9e0a7687f1db4904971dc6b7531c06703ce6565-2880x1940.jpg%3Ffit%3Dmax%26auto%3Dformat&amp;w=3840&amp;q=75"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start self-center max-w-4xl gap-6 md:gap-8">
                        <div className="flex flex-col gap-4 balance md:gap-6">
                            <h6>Invite Cabalar</h6>
                            <h3 className="balance">To Your Event</h3>
                        </div>
                        <p>The Cabalar Food Truck brings handheld happiness to your special event. Whatever the occasion, our smash burgers, chicken sandwiches, and milkshakes are sure to please any crowd.</p>
                        <a href="/food-truck" className="border-darkgreen px-6 py-3 text-base uppercase transition-colors border-2 rounded-full md:py-4 md:text-xl font-neue  hover:bg-green hover:text-white hover:border-green border-white">Check out our truck</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
