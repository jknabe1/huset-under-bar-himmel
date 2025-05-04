"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

export default function SwiperCarousel() {
  const [mounted, setMounted] = useState(false)

  // Sample images - replace with your actual images
  const images = [
    {
      src: "https://www.eatcabalar.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fa2bflsso%2Fproduction%2Ff4191278ba6980daf092a788a3e74d52217beedb-6772x4515.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75",
      alt: "Children on playground stairs",
    },
    {
      src: "https://www.eatcabalar.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fa2bflsso%2Fproduction%2Fd0ed988dd05e0d1dc7be89f2b3479c14cc43cbfc-5504x8256.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75",
      alt: "Crowded venue with people",
    },
    {
      src: "https://www.eatcabalar.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fa2bflsso%2Fproduction%2Fb386e5b67da439729e34786210d721b14c2fb948-2880x1919.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1080&q=75",
      alt: "People in food service area",
    },
    // Add more images as needed
  ]

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="nox">
      <div className="relative flex flex-row align-middle select-none">
        <Swiper
          modules={[Navigation]}
          spaceBetween={64}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-next",
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
            },
          }}
          className="swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="relative flex flex-wrap items-start content-center h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="object-cover max-h-[30rem] md:max-h-[40rem] w-full h-auto rounded-img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden md:block">
          {/* Previous button */}
          <div className="absolute m-auto left-8 top-[45%] z-10 swiper-button-prev">
            <div className="w-16 h-16 p-5 transition bg-white rounded-full cursor-pointer md:p-6 md:w-20 md:h-20 hover:bg-darkgreen hover:text-white text-darkgreen">
              <svg viewBox="0 0 45 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.877933 22.545L22.4836 0.939387L24.6049 3.06071L5.12057 22.545L24.6049 42.0293L22.4835 44.1506L0.877933 22.545Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.01262 21.0373L44.1025 21.0374L44.1025 24.0374L3.01262 24.0373L3.01262 21.0373Z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Next button */}
          <div className="absolute m-auto right-8 rotate-180 top-[45%] z-10 swiper-next">
            <div className="w-16 h-16 p-5 transition bg-white rounded-full cursor-pointer md:p-6 md:w-20 md:h-20 hover:bg-darkgreen hover:text-white text-darkgreen">
              <svg viewBox="0 0 45 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.877933 22.545L22.4836 0.939387L24.6049 3.06071L5.12057 22.545L24.6049 42.0293L22.4835 44.1506L0.877933 22.545Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.01262 21.0373L44.1025 21.0374L44.1025 24.0374L3.01262 24.0373L3.01262 21.0373Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .rounded-img {
          border-radius: 8px;
        }
        
        .swiper-slide {
          width: 723.6px;
          margin-right: 64px;
        }
        
        .darkgreen {
          color: #006400;
        }
        
        .bg-darkgreen {
          background-color: #006400;
        }
        
        /* Hide default swiper navigation buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
      `}</style>
    </section>
  )
}
