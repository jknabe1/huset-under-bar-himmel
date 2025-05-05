"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import HusetLogoWithoutText from "./huset-logo_without-text"
import GridBackground from "./grid-background"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-3 mt-2 transition-all duration-300 md:mt-0 md:py-4 md:px-5 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col p-3 md:p-5 rounded-xl" style={{ backgroundColor: "" }}>
          <div className="flex flex-row justify-between gap-4 items-center">
            <div className="flex flex-row justify-between w-full items-center">
              <button
                className="px-6 py-2 text-base uppercase transition-opacity border-2 rounded-full md:text-xl md:py-4 md:px-10 border-[--red] hover:opacity-50 focus-visible:border-none"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0rem, 0rem)",
                  color: "white",
                  backgroundColor: "rgb(2, 90, 60)",
                }}
                onClick={toggleMenu}
              >
                Utforska
              </button>
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="block transition-opacity shrink-0 hover:opacity-75"
                  style={{ mixBlendMode: "difference", color: "rgb(2, 90, 60)" }}
                >
                  <HusetLogoWithoutText className="mix-blend-difference text-red" />
                </Link>
              </div>
              <a
                href="https://www.toasttab.com/cabalar/v3/?mode=fulfillment"
                target="_blank"
                rel="noreferrer"
                className="items-center hidden px-10 py-4 text-xl text-center uppercase border-2 rounded-full lg:flex nav-button hover:text-white hover:bg-black"
              >
                Beställ
              </a>
            </div>
          </div>
          <div
            className="flex flex-col h-0 gap-2 overflow-hidden text-white lg:flex lg:flex-row md:grid md:grid-cols-2"
            style={{
              marginTop: isMenuOpen ? "1rem" : "0rem",
              height: isMenuOpen ? "auto" : "0px",
            }}
          >
            <a
              href="/huset"
              target="_self"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-darkgreen flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0">
                <GridBackground />
              </div>
              
              {/* Content */}
              <Image
                alt=""
                width={800}
                height={800}
                className="object-contain md:block hidden h-[10vw] md:h-[13vw] w-auto lg:w-full relative z-10"
                sizes="20vw"
                src="https://cdn.sanity.io/images/a2bflsso/production/d7fbfdeaede294582ef3b8d3b01ed40645d8ee3d-800x800.svg?fit=max&auto=format"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl font-obviously-narrow lg:font-neue text-black relative z-10">
                Huset
              </span>
            </a>
            <a
              href="/meny"
              target="_self"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-darkgreen flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
              >
                {/* Grid Background */}
                <div className="absolute inset-0">
                  <GridBackground />
                </div>
              <Image
                alt=""
                width={400}
                height={400}
                className="object-contain md:block hidden h-[10vw] md:h-[13vw] w-auto relative lg:w-full"
                sizes="20vw"
                src="/media/static/bread-icon.png"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl font-obviously-narrow relative text-black">
                Meny
              </span>
            </a>
            <a
              href="/overvaningen"
              target="_self"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-darkgreen flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0">
                <GridBackground />
              </div>
              <Image
                alt=""
                width={208}
                height={198}
                className="object-contain md:block hidden h-[10vw] md:h-[13vw] w-auto lg:w-full relative"
                sizes="20vw"
                src="https://cdn.sanity.io/images/a2bflsso/production/175275c41cc5689d14441a5df4356b78e4a45871-208x198.svg?fit=max&auto=format"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl font-obviously-narrow relative text-black">
                Övervåningen
              </span>
            </a>
            <a
              href="/kontakt"
              target="_self"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-darkgreen flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0">
                <GridBackground />
              </div>

              <Image
                alt=""
                width={400}
                height={400}
                className="object-contain md:block hidden h-[10vw] md:h-[13vw] w-auto lg:w-full relative"
                sizes="20vw"
                src="https://cdn.sanity.io/images/a2bflsso/production/6fbb243916384c7b5e6a4105452ed24143d3827c-400x400.svg?fit=max&auto=format"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl relative text-black">
                KONTAKT & INFO
              </span>
            </a>
            <a
              href="https://kexxkultur.com/under-bar-himmel/"
              target="blank"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-darkgreen flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0">
                <GridBackground />
              </div>

              <Image
                alt=""
                width={800}
                height={800}
                className="object-contain md:block hidden h-[10vw] md:h-[13vw] w-auto lg:w-full relative"
                sizes="20vw"
                src="https://cdn.sanity.io/images/a2bflsso/production/bdfb658c60a308ed20831915a195c7403ebe3ae7-800x800.svg?fit=max&auto=format"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl relative text-black">
                EVENEMANG & BILJETTER
              </span>
            </a>
            <a
              href="#"
              className="px-10 w-full md:col-span-2 py-4 text-3xl pb-5 flex justify-center items-center min-h-[10vw] text-center uppercase border-2 border-white rounded-[1rem] font-obviously-narrow lg:hidden nav-button"
              style={{
                borderColor: "rgb(2, 90, 60)",
                color: "rgb(2, 90, 60)",
                backgroundColor: "white",
              }}
            >
              Beställ
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}