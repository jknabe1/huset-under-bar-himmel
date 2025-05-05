import React from 'react'

const VideoSection = () => {
  return (
    <div>
        <section className="relative flex flex-col gap-10 lg:gap-16 xl:gap-24 small">
            <video className="w-full object-cover rounded-img h-[70vh] md:h-[83vh]" playsInline loop muted autoPlay>
                <source src="https://liveatheart.se/wp-content/uploads/2024/11/LAH-Creative-MusicStartup-ENG-sub.mp4"/></video>
            </section>
    </div>
  )
}

export default VideoSection