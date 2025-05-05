import GridBackground from "./grid-background"
import HusetLogo from "./huset-logo"

export default function Footer() {
  return (
    <footer className="relative h-full text-black md:sticky bottom-0">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden h-screen">
        <GridBackground />
      </div>

      {/* Content Container - Using flex with space-between to distribute content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-4 py-12 md:px-8">
        {/* Top Content - Navigation Links */}
        <div className="flex flex-col gap-4 text-xl uppercase md:flex-row md:flex-wrap md:justify-between md:gap-4 md:text-2xl">
          <a className="transition hover:opacity-50" href="/about">
            Huset
          </a>
          <a className="transition hover:opacity-50" href="/menu">
            Meny
          </a>
          <a className="transition hover:opacity-50" href="/farms-friends">
            Övervåningen
          </a>
          <a className="transition hover:opacity-50" href="/food-truck">
            Kontakt & Info
          </a>
          <a
            className="transition hover:opacity-50"
            href="https://www.toasttab.com/cabalar/giftcards"
            target="_blank"
            rel="noreferrer"
          >
            Evengemang & Biljetter
          </a>
        </div>

        {/* Middle Content - Action Buttons and Logo */}
        <div className="flex flex-col items-center justify-center flex-grow gap-16 my-auto">
          {/* Action Buttons */}
          <div className="flex flex-col w-full gap-8 md:flex-row">
            <a
              className="w-full px-6 py-4 text-2xl tracking-wide text-center uppercase transition-colors border-2 border-black rounded-full md:text-4xl font-neue hover:bg-black hover:text-white"
              href="https://www.toasttab.com/cabalar/v3/?mode=fulfillment"
              target="_blank"
              style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0rem, 0rem)" }}
              rel="noreferrer"
            >
              Beställ
            </a>
            <a
              className="w-full px-6 py-4 text-2xl tracking-wide text-center uppercase transition-colors border-2 border-black rounded-full md:text-4xl font-neue hover:bg-black hover:text-white"
              href="https://maps.app.goo.gl/FQSPA7F9SvDk19Vx9"
              target="_blank"
              rel="noreferrer"
            >
              Hitta hit
            </a>
          </div>

          {/* Logo - Centered vertically */}
          <div className="flex items-center justify-center">
            <HusetLogo />
          </div>
        </div>

        {/* Bottom Content - Copyright and Credits */}
        <div className="flex flex-col items-start justify-between gap-2 pt-10 text-sm uppercase md:gap-4 md:grid md:grid-cols-3">
          <p>Copy: Kexx Kultur AB</p>
          <button className="inline-block">
            <p>Skapad av K&K Media Group</p>
          </button>
          <a className="text-right" href="/privacy-policy">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
