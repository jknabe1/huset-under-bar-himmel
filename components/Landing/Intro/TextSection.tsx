import React from 'react'

const TextSection = () => {
  return (
    <div>
        <section className="flex flex-col gap-8 overflow-hidden noy lg:gap-32 lg:grid lg:grid-flow-col">
            <div className="col-span-2">
                <p className="text-3xl leading-tight 2xl:text-7xl lg:text-6xl">Cabalar is the happiest place on earth, or at least in Lancaster City. As a combination butchery meets burger spot with a real happy bar, we pair our mouthwatering burgers, sandwiches, fries, and sides with some mighty tasty bevvies, all made with the best ingredients!</p>
            </div>
            <div className="col-span-1 md:prose-p:text-4xl prose-p:leading-snug">
                <p>Hours of Operation:</p>
                <p>Thursday - Sunday: 11-9</p>
                <p>Monday - Wednesday: Closed</p>
                <p></p>
                <p>CLOSED EASTER SUNDAY</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <div className="pt-8 -mb-24 -mr-10">
                    <video className="w-full h-auto" playsInline muted autoPlay>
                        <source src="assets/closed-sign.mp4"/></video>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default TextSection