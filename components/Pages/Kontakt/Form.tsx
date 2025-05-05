import React from 'react'

export default function Form() {
  return (
    <div>
        <section>
            <form className="grid gap-8 mx-auto md:gap-12 md:grid-cols-2 max-w-7xl" autoComplete="on">
                <fieldset>
                    <input type="text" className="w-full pb-2 mb-3 text-2xl border-b-2 md:pl-4 md:text-4xl " id="first_name" placeholder="Huset" required name="first_name"/>
                    <label className="text-base uppercase md:pl-4">Namn*</label>
                </fieldset>
                <fieldset>
                    <input type="text" className="w-full pb-2 mb-3 text-2xl border-b-2 md:pl-4 md:text-4xl " id="last_name" placeholder="Under Bar Himmel" required name="last_name"/>
                    <label className="text-base uppercase md:pl-4">Efternamn*</label>
                </fieldset>
                <fieldset>
                    <input type="email" className="w-full pb-2 mb-3 text-2xl border-b-2 md:pl-4 md:text-4xl  " id="email" placeholder="hej@husetunderbarhimmel.se" required name="email"/>
                    <label className="text-base uppercase md:pl-4">E-post*</label>
                </fieldset>
                <fieldset>
                    <input type="text" className="w-full pb-2 mb-3 text-2xl border-b-2 md:pl-4 md:text-4xl  " id="subject" placeholder="Kan man få receptet?" required name="subject"/>
                    <label className="text-base uppercase md:pl-4">Ämne*</label>
                </fieldset>
                <fieldset className="md:col-span-2">
                    <textarea className="w-full p-4 text-2xl border-2 rounded-xl md:pl-4 md:text-4xl  " name="message" id="message" placeholder="Här skriver du ditt meddelande" required/>
                    <label className="text-base uppercase md:pl-4">Meddelande*</label>
                </fieldset>
                <div className="text-center md:col-span-2">
                    <button className="px-10 py-4 text-2xl tracking-wide text-center text-black uppercase transition-colors border-4 rounded-full md:py-8 md:px-16 bg-white border-black md:text-5xl hover:bg-black hover:text-white"><p>Skicka!</p></button>
                </div>
            </form>
        </section>
    </div>
  )
}
