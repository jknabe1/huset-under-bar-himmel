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
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/485140459_954691716879445_3363319081694147636_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8WKziTyRrA8Q7kNvwHqgSyK&_nc_oc=AdlkwD38wePQ_dUSPiG2TDmwoTAZS-48KZ0Eo4URMuk3AcI-XQsWWyP7QqnJhH-pwMY&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=zffulcsk7I4ssKXIVN9z-w&oh=00_AfEiwuRZxklfZkQQGAIaRh2MDK-MN_vTOEW6hSFsbE-0ug&oe=681E8478",
      alt: "Children on playground stairs",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/485195146_954691386879478_57652724461218051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RYFBGJ7bv0UQ7kNvwE-QwWH&_nc_oc=Adl_LVIPJt8zS21R3EIzh-uvX8rWwHcnHT3q59P91PYHbjrZFY7YmU5b-eN5QmUlnLY&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=NYNQ_M9r6J1pm2jaRBlx3A&oh=00_AfErMtTHnVFyQO1PVuJzOAiXVw215xeppZDx65lypYNZ0w&oe=681E876F",
      alt: "Crowded venue with people",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/486227429_954691723546111_2549783431023597557_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FLEhCbFZA3oQ7kNvwEUnvHx&_nc_oc=Adnx5fXvtl-u8PVR1Tn-HLF3w_4Uy_F8BM0ihSvLlyre9fWmh7-xrzFcT_AwdZ9jzRY&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=1j6_N5y9hMnXlG84GB7yww&oh=00_AfFICH35EODMlL6B0CI6LDZC8LWmmakqPdpfAIzxZC_IKg&oe=681E8556",
      alt: "People in food service area",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/467150261_18028568183598302_1668154022336930534_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mz3ufUeYqaYQ7kNvwFk6PVe&_nc_oc=AdkKrZiHbn92UEAATMZXoXfsHqNB4FbrM899NgOuQ1W1GhmrLKAqQv5w6S5Vn1M4iR4&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=zPbavF_YCfdlJoFCY_q8sQ&oh=00_AfEZutbeWCw4qHdGJX8315PoiabFlguK1VTqj9Dq9gyTDw&oe=681E6571",
      alt: "People enjoying food and drinks",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/467182054_18028568174598302_167979162287997821_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_Voz9AwlydMQ7kNvwGtEo2L&_nc_oc=AdmAcO3smcBUUR_KQdMwJSALokJTBQh5hh552dMyoS6tWtTEUi00cpQYWwG4dKkqhDs&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=iW2oEiFK_zi23UUnRQJudA&oh=00_AfHQoUAZDSg1bWvBn1BNSs6y9rS154qUG1cSWOoX5pbhjQ&oe=681E51A9",
      alt: "People in food service area",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/485002867_954099776938639_4994887060382250896_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=cbzNSgoKuv8Q7kNvwH3OpbK&_nc_oc=Admzx-JIQDutaeKfeTXDQSfNfosAzVhnSaPY4X-KcCfDSy9Pdjwiri40ce8tI_VuFqI&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=JrOQ2ZUHm1d6Dv5bnpmyuA&oh=00_AfFmEzKhSce3nWUQJ0WELldU-K_ckaaatHhUS7idyEqtMw&oe=681E5D1F",
      alt: "People enjoying food and drinks",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/484878760_954099726938644_3515479564491537797_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=wpHUVvnx65cQ7kNvwEa0sYw&_nc_oc=Adnj-7-S7kDgcPDP24Yw-wDXstcV0kkZsaOOJAV22cdEXN2rAWVVVLQjkxi5czDsXZw&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=HhbNGkBxdni213TLyk2dTg&oh=00_AfHOocGMw4S3JoiPzL893fn7MwmGkYDGfX0gR3yqbp7oWw&oe=681E6C00",
      alt: "Children on playground stairs",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/484989574_954099870271963_3906773898300734946_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=JFMb4mgpF8EQ7kNvwE-91kJ&_nc_oc=AdkeXdjLR0yszGawy9D7RElTzo6i3TUGzRcRdcIwYaIItdGe9oVfGyB8D6wvBox08pY&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=z3B-O_cuvNHzyU3QtlV0kA&oh=00_AfE5At5AbDrxu9VBDANqzs5Qk4xxdQkbbbqMQD9yRRRnxQ&oe=681E62EA",
      alt: "Children on playground stairs",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/485040851_954087003606583_5552664756355062887_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=lie7jw8dhwgQ7kNvwGNLHKR&_nc_oc=Adl7QFGpJDjps0_Y-TzZaAGdX39ZDsmfheKUoZ1dY7gZW1F_MPIaT-sUWsI62q8sHhE&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=eq6WXwuBkjGC3JK7EQMnng&oh=00_AfFD0VLxa3FaxnzSrejBVqO45N7QUpuOdZtwHVUSYrn9iw&oe=681E779A",
      alt: "Children on playground stairs",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/484983154_954087310273219_1440832568279278488_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=W3A3h78ePNwQ7kNvwGEo1TO&_nc_oc=AdlW6qsqsAdXfsxDxtjHojow033u98tSSMZxI2MreGnER8Ts6gRC_FlwRpBsj3zSOSo&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=ZnIHZQYqs0QDMnKWZbmtfQ&oh=00_AfFgdu0qNM5r2pTSuPPmfso8NrwboC3QI0nkciI0HpG1tg&oe=681E7743",
      alt: "Children on playground stairs",
    },
    {
      src: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/467024827_18028565672598302_5596291094633876224_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6gx-93_JXCEQ7kNvwGBiCnJ&_nc_oc=AdnJ1cjd4FZYsOqnuYWQZdi2tThK-cKmFpvz4LP87dktxE_xYnHwA91_O9G_gbJbLws&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=FIqPIDjNgzmYVXSHnWtZyg&oh=00_AfEp36fH5g79YUvnd7DHBdRqy9WctaCy0a4qzYOlZvB5XQ&oe=681E5F29",
      alt: "Children on playground stairs",
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
          slidesPerView={1.6}
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

        <div className="hidden">
          {/* Previous button */}
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
    </section>
  )
}
