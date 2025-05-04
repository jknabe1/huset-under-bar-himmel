import React from 'react'

const VideoSection = () => {
  return (
    <div>
        <section className="relative flex flex-col gap-10 lg:gap-16 xl:gap-24 small">
            <video className="w-full object-cover rounded-img h-[70vh] md:h-[83vh]" playsInline loop muted autoPlay>
                <source src="https://player.vimeo.com/progressive_redirect/playback/1015703246/rendition/1080p/file.mp4?loc=external&amp;signature=4e0e835077aa38b200a9bd3a37726cd3ed732851c9da2c3d268313552ce77f50"/></video>
            </section>
    </div>
  )
}

export default VideoSection