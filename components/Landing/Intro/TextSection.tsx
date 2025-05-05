import React from 'react'

const TextSection = () => {
  return (
    <div>
        <section className="flex flex-col gap-8 overflow-hidden noy lg:gap-32 lg:grid lg:grid-flow-col">
            <div className="col-span-2">
                <p className="text-3xl leading-tight 2xl:text-7xl lg:text-6xl">Huset ligger i världens mysigaste plats - Wadköping. Precis bakom spelgårdens läktare i närheten av teaterladan, granne med stadsparken. Örebros nya sommarpärla. Öppnar sommar 2025. Mackor, Musik & Gemenskap i Wadköping. </p>
            </div>
            <div className="col-span-1 text-4xl prose-p:leading-snug">
                <p>Öppettider:</p>
                <p>Thursday - Sunday: 11-9</p>
                <p>Monday - Wednesday: Closed</p>
                <p></p>
                <p>CLOSED EASTER SUNDAY</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <div className="pt-8 -mb-24 -mr-10"></div></div></section>
    </div>
  )
}

export default TextSection