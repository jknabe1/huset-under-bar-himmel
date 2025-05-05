import Link from 'next/link'
import React from 'react'

export default function StepByStep() {
  return (
    <div>
        <section>
                <div className="mx-auto mb-16 text-center max-w-7xl lg:mb-32">
                    <span className="kicker">Det är lätt som en plätt</span>
                    <h2 className="louder">Allt kan vara ditt</h2>
                </div>
                <div className="flex flex-col gap-16 lg:grid lg:grid-cols-3">
                    <div className="flex flex-col items-center gap-6 text-center">
                    <h1 className='kicker'>1</h1>
                    <div className="flex flex-col gap-6 text-center ">
                        <h2 className="kicker">Hör av dig</h2>
                        <p className="max-w-md balance">Ge oss alla saftiga detaljer om din vision, och därefter börjar vårt team planera. <Link className='underline hover:italic' href="/kontakt">Kontakta oss</Link>.</p>
                    </div>
                </div>
                    <div className="flex flex-col items-center gap-6 text-center">
                    <h1 className='kicker'>2</h1>
                    <div className="flex flex-col gap-6 text-center ">
                            <h2 className="kicker">Pricken över i:et</h2>
                            <p className="max-w-md balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6 text-center">                  
                        <h1 className='kicker'>3</h1>
                        <div className="flex flex-col gap-6 text-center ">
                            <h2 className="kicker">Bli hungrig</h2>
                            <p className="max-w-md balance">Papperarbetet är klart – nu är det dags att bli riktigt taggad och redo för en fantastisk upplevelse </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <button className="px-10 py-4 text-2xl tracking-wide text-center text-white uppercase transition-colors border-4 rounded-full bg-darkgreen border-darkgreen font-neue hover:bg-white hover:text-darkgreen">Book the truck</button>
                </div>
        </section>
    </div>
  )
}
