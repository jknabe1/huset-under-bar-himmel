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
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/485085867_954691720212778_5463680591443656414_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nzqYAwm2oUIQ7kNvwESS_dJ&_nc_oc=AdnRpRPx8E0MID8tPveP7VDPoFEr1Z8PcZ-wPhAe8tWpTH8-CukK-yoz3QGajPQy8N4&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=igzO4usAe2YlMqEdmU_Mag&oh=00_AfGkk055V50Xqo3bzbTS15iTcbXkhqevctC-PDNreuwF7w&oe=681DEE7C",
      alt: "Children on playground stairs",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/466971569_18028568105598302_6219511449949460606_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1aGP6l-kZrUQ7kNvwEjABy3&_nc_oc=Adl-tNTlXoxj09BAWOhdaqwZr6omHhJBDrA-lO4TFq28T7I64SZlIQRbF8V88HKew3E&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=7yQ2J7a68DS0suQGrq7atQ&oh=00_AfESkVoaHAOuTmp60Zsm3lTx5fk5eGsuRWX69aOP2mteMQ&oe=681DD563",
      alt: "Crowded venue with people",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/467321579_18028568381598302_7397446107310404386_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cN93V91jq8cQ7kNvwHHHxfK&_nc_oc=Adm0qaaqMD6hxi7NSTFd4H7--ze-us-8l4D0arPYsJBTiwUfG5tyFC5vwAvTFUKUyNA&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=FXSnnek9LFbNpjET7InwnA&oh=00_AfEGmzbFciuKD62lo4YjYSbfEofMbyQbGjUpwEaq3gFgEQ&oe=681DD66A",
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
                  width={1080}
                  height={1080}
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
