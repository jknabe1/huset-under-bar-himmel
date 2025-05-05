import React from 'react'

export default function Form() {
  return (
    <div>
        <section>
            <form className="grid gap-8 mx-auto md:gap-12 md:grid-cols-2 max-w-7xl" autoComplete="on">
                <fieldset>
                    <input type="text" className="w-full pb-2 mb-3 text-2xl border-b-2 md:pl-4 md:text-4xl focus:border-green border-darkgreen " id="first_name" placeholder="Bo" required name="first_name"/>
                    <label className="text-base uppercase md:pl-4">First Name*</label>
                </fieldset>
                <fieldset>
                    <input type="text" className="w-full pb-2 mb-3 text-2xl border-b-2 md:pl-4 md:text-4xl focus:border-green border-darkgreen" id="last_name" placeholder="Cabalar" required name="last_name"/>
                    <label className="text-base uppercase md:pl-4">Last Name*</label>
                </fieldset>
                <fieldset>
                    <input type="email" className="w-full pb-2 mb-3 text-2xl border-b-2 md:pl-4 md:text-4xl focus:border-green border-darkgreen " id="email" placeholder="bo.snake@eatcabalar.com" required name="email"/>
                    <label className="text-base uppercase md:pl-4">Email*</label>
                </fieldset>
                <fieldset>
                    <input type="text" className="w-full pb-2 mb-3 text-2xl border-b-2 md:pl-4 md:text-4xl focus:border-green border-darkgreen " id="subject" placeholder="Your aioli stained my shirt..." required name="subject"/>
                    <label className="text-base uppercase md:pl-4">Subject*</label>
                </fieldset>
                <fieldset className="md:col-span-2">
                    <textarea className="w-full p-4 text-2xl border-2 rounded-xl md:pl-4 md:text-4xl focus:border-green border-darkgreen " name="message" id="message" placeholder="Type your message here..." required/>
                    <label className="text-base uppercase md:pl-4">Message*</label>
                </fieldset>
                <div className="text-center md:col-span-2">
                    <button className="px-10 py-4 text-2xl tracking-wide text-center text-white uppercase transition-colors border-4 rounded-full md:py-8 md:px-16 bg-darkgreen border-darkgreen md:text-5xl font-neue hover:bg-white hover:text-darkgreen">Submit Message</button>
                </div>
            </form>
        </section>
    </div>
  )
}
