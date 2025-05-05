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
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-4 py-8 md:px-8 md:py-12">
        {/* Top Content - Navigation Links */}
        <div className="flex flex-col gap-3 text-lg uppercase md:flex-row md:flex-wrap md:justify-between md:gap-4 md:text-2xl">
          <a className="transition hover:opacity-50" href="/huset">
            Huset
          </a>
          <a className="transition hover:opacity-50" href="/meny">
            Meny
          </a>
          <a className="transition hover:opacity-50" href="/overvaningen">
            Övervåningen
          </a>
          <a className="transition hover:opacity-50" href="/kontakt">
            Kontakt & Info
          </a>
          <a
            className="transition hover:opacity-50"
            href="https://kexxkultur.com/under-bar-himmel/"
            target="_blank"
            rel="noreferrer"
          >
            Evengemang & Biljetter
          </a>
        </div>

        {/* Middle Content - Action Buttons and Logo */}
        <div className="flex flex-col items-center justify-center flex-grow gap-8 my-auto md:gap-16">
          {/* Action Buttons */}
          <div className="flex flex-col w-full gap-4 md:gap-8 md:flex-row">
            <a
              className="w-full px-4 py-3 text-xl tracking-wide text-center uppercase transition-colors border-2 border-black rounded-full md:px-6 md:py-4 md:text-4xl font-neue hover:bg-black hover:text-white"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Beställ Online
            </a>
            <a
              className="w-full px-4 py-3 text-xl tracking-wide text-center uppercase transition-colors border-2 border-black rounded-full md:px-6 md:py-4 md:text-4xl font-neue hover:bg-black hover:text-white"
              href="https://maps.app.goo.gl/FQSPA7F9SvDk19Vx9"
              target="_blank"
              rel="noreferrer"
            >
              Hitta hit
            </a>
          </div>

          {/* Logo - Centered vertically */}
          <div className="flex items-center justify-center">
            <HusetLogo width={200} height={80} className="md:w-[300px] md:h-[120px]" />
          </div>
        </div>

        {/* Bottom Content - Copyright and Credits */}
        <div className="flex flex-col items-start justify-between gap-2 pt-6 text-xs uppercase md:text-sm md:pt-10 md:gap-4 md:grid md:grid-cols-3">
          <a className="py-1">Copy: Kexx Kultur AB</a>
          <button className="inline-block py-1">
            <a>Skapad av K&K Media Group</a>
          </button>
          <a className="py-1 md:text-right">Integritet</a>
        </div>
      </div>
    </footer>
  )
}
