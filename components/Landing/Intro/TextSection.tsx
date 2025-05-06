import React from 'react'

const TextSection = () => {
  return (
    <div>
        <section className="flex flex-col gap-8 overflow-hidden lg:gap-32 lg:grid lg:grid-flow-col">
            <div className="col-span-2">
                <p className="kicker">Huset ligger i världens mysigaste plats - Wadköping. Precis bakom spelgårdens läktare i närheten av teaterladan, granne med stadsparken. Örebros nya sommarpärla. Öppnar sommar 2025. Mackor, Musik & Gemenskap i Wadköping. </p>
            </div>
            <div className="col-span-1 text-4xl">
                <p>Öppettider:</p>
                <p>Mån - Fre: 11-18</p>
                <p>Lör - Sön: 10-16</p>
                <div className="pt-8"></div>
            </div>
          </section>
    </div>
  )
}

export default TextSection