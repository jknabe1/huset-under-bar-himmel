import React from 'react'

export default function Intro() {
  return (
    <div>
        <section className="relative flex flex-col gap-10 lg:gap-16 xl:gap-24 small">
            <div className="flex flex-col gap-6 text-center md:gap-8 lg:gap-16">
                <h1 className="flex flex-col gap-4 md:gap-6 mt-[6vw] md:mt-4">
                    <span className="kicker">Menyn</span>
                    <span className="louder">Förbered dig på en åktur.</span>
                </h1>
            </div>
        </section>
    </div>
  )
}
