import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="relative bottom-0 text-white md:sticky bg-darkgreen">
            <div className="flex flex-col gap-10 px-4 py-12 md:gap-16 md:py-20 md:px-8 md:pb-8">
                <div className="flex flex-row flex-wrap justify-between gap-4 text-xl uppercase md:text-2xl font-neue">
                    <a className="transition hover:opacity-50" href="/about">About</a>
                    <a className="transition hover:opacity-50" href="/menu">Menu</a>
                    <a className="transition hover:opacity-50" href="/farms-friends">Farms &amp; Friends</a>
                    <a className="transition hover:opacity-50" href="/food-truck">Food Truck</a>
                    <a className="transition hover:opacity-50" href="https://www.toasttab.com/cabalar/giftcards" target="_blank">Gift Card</a>
                    <a className="transition hover:opacity-50" href="/contact">Contact</a>
                </div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <a className="w-full px-6 py-4 text-2xl tracking-wide text-center uppercase transition-colors border-2 border-white rounded-full md:text-4xl font-neue hover:bg-white hover:text-darkgreen" href="https://www.toasttab.com/cabalar/v3/?mode=fulfillment" target="_blank">Order Online</a>
                    <a className="w-full px-6 py-4 text-2xl tracking-wide text-center uppercase transition-colors border-2 border-white rounded-full md:text-4xl font-neue hover:bg-white hover:text-darkgreen" href="https://goo.gl/maps/Sw65SEWTxQMYBNn98" target="_blank">Directions</a>
                </div>
                <span>© Cabalar Meat Co LLC.</span>
                <button className="inline-block">Site Credit</button>
                <a className="text-right" href="/privacy-policy">Privacy Policy</a>
            </div>
        </div>
    <div>
    </div>
    </div>
  )
}

export default Footer