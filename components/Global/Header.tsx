"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import HusetLogoWithoutText from "./huset-logo_without-text"
import GridBackground from "./grid-background"
import { HouseIcon, UpstairsIcon } from "./Icons"

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
        className={`fixed top-0 left-0 right-0 z-50 px-3 mt-2 transition-all duration-300 md:mt-0 md:py-4 md:px-5 px-global ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className={`flex flex-col p-3 md:p-5 rounded-xl ${isMenuOpen ? "bg-white" : ""}`}>
          <div className="flex flex-row justify-between gap-4 items-center">
            <div className="flex flex-row justify-between w-full items-center">
              <button
                className="px-4 py-2 text-base uppercase transition-opacity border-2 rounded-full md:text-xl md:py-3 md:px-8 hover:opacity-50 text-white border-black cursor-pointer bg-black"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <p>
                    <span className="text-2xl md:text-3xl">STÄNG</span>
                  </p>
                ) : (
                  <p>
                    <span className="text-2xl md:text-3xl">ÖPPNA</span>
                  </p>
                )}
              </button>
              <div className="flex justify-center">
                <Link href="/" className="block transition-opacity shrink-0 hover:opacity-75">
                  <HusetLogoWithoutText width={250} height={80} color="#000000" />
                </Link>
              </div>
              <button>
                <p>
                  <span className="text-2xl md:text-3xl">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="items-center hidden px-6 py-3 text-center uppercase border-2 rounded-full lg:flex nav-button hover:text-white hover:bg-black md:px-8 md:py-3 text-2xl md:text-3xl"
                    >
                      Beställ
                    </a>
                  </span>
                </p>
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col h-0 gap-2 overflow-hidden text-white lg:flex lg:flex-row md:grid md:grid-cols-2 ${isMenuOpen ? "p-4  rounded-b-xl" : ""}`}
            style={{
              marginTop: isMenuOpen ? "1rem" : "0rem",
              height: isMenuOpen ? "auto" : "0px",
              transition: "height 0.3s ease-in-out, margin-top 0.3s ease-in-out, padding 0.3s ease-in-out",
            }}
          >
            <a
              href="/huset"
              target="_self"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-black flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0">
                <GridBackground />
              </div>

              {/* Content */}
              <HouseIcon
                width={800}
                height={800}
                className="object-contain hidden h-[10vw] md:h-[13vw] w-auto lg:w-full relative z-10"
                color="black"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl text-black relative z-10">
                Huset
              </span>
            </a>
            <a
              href="/meny"
              target="_self"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-black flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0">
                <GridBackground />
              </div>
              <Image
                alt=""
                width={800}
                height={800}
                className="object-contain md:block hidden h-[10vw] md:h-[13vw] w-auto relative lg:w-full z-10"
                sizes="20vw"
                src="/media/static/bread-icon.png"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl relative text-black z-10">
                Meny
              </span>
            </a>
            <a
              href="/overvaningen"
              target="_self"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-black flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0">
                <GridBackground />
              </div>
              <UpstairsIcon
                width={800}
                height={800}
                className="object-contain hidden h-[10vw] md:h-[13vw] w-auto lg:w-full relative z-10"
                color="black"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl font-obviously-narrow relative text-black z-10">
                Övervåningen
              </span>
            </a>
            <a
              href="/kontakt"
              target="_self"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-black flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0">
                <GridBackground />
              </div>

              <Image
                alt=""
                width={400}
                height={400}
                className="object-contain hidden h-[10vw] md:h-[13vw] w-auto lg:w-full relative z-10"
                sizes="20vw"
                src="https://cdn.sanity.io/images/a2bflsso/production/6fbb243916384c7b5e6a4105452ed24143d3827c-400x400.svg?fit=max&auto=format"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl relative text-black z-10">
                KONTAKT & INFO
              </span>
            </a>
            <a
              href="https://kexxkultur.com/under-bar-himmel/"
              target="blank"
              className="lg:p-8 md:p-6 p-4 w-full bg-white border-2 border-black flex gap-8 lg:flex-col items-center rounded-[1rem] justify-center md:justify-between md:flex-row-reverse transition hover:bg-green relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0">
                <GridBackground />
              </div>

              <Image
                alt=""
                width={800}
                height={800}
                className="object-contain hidden h-[10vw] md:h-[13vw] w-auto lg:w-full relative z-10"
                sizes="20vw"
                src="https://cdn.sanity.io/images/a2bflsso/production/bdfb658c60a308ed20831915a195c7403ebe3ae7-800x800.svg?fit=max&auto=format"
              />
              <span className="mb-1 text-3xl text-center uppercase md:text-4xl lg:mb-0 lg:text-2xl relative text-black z-10">
                EVENEMANG & BILJETTER
              </span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="px-10 w-full md:col-span-2 py-4 text-3xl pb-5 flex justify-center items-center min-h-[10vw] text-center uppercase border-2 border-white rounded-[1rem] font-obviously-narrow lg:hidden nav-button hover:bg-black hover:text-white transition-colors"
              style={{
                borderColor: "black",
                color: "black",
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
