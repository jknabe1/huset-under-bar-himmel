import Link from 'next/link'
import React from 'react'

export default function Intro() {
  return (
    <div>
      <section className="relative flex flex-col gap-10 lg:gap-16 xl:gap-24 small">
        <div className="flex flex-col gap-6 text-center md:gap-8 lg:gap-16">
            <h1 className="flex flex-col gap-4 md:gap-6 mt-[6vw] md:mt-4">
              <span className="kicker">Kärleksbrev?</span>
              <span className="louder">Kontakta oss</span>
            </h1>
          <div className="relative">
            <p className="mx-auto leading-tight xl:leading-[1.1] text-wrap break-words text-[1.25rem] px-global">Frågor om restaurang, meny och samarbeten: <Link className='hover:italic' href="mailto:hej@husetunderbarhimmel.se">hej@husetunderbarhimmel.se</Link> eller kontaktformuläret nedan.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
