import { CalendarDays, Menu, MessageCircle, PhoneCall, X } from 'lucide-react'
import { useState } from 'react'

function Header({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappInquiryLink =
    'https://wa.me/919553191391?text=Hello%20Bhaskar%20Dental%20Clinic%2C%20I%20have%20an%20enquiry.'

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="bg-slate-900 text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2 text-xs font-medium sm:justify-between sm:px-6 lg:px-8">
          <p className="hidden text-slate-300 sm:block">
            Family-focused care with modern dental technology
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+919553191391"
              className="inline-flex items-center gap-1.5 text-slate-100 hover:text-cyan-300"
            >
              <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
              +91 95531 91391
            </a>
            <a
              href={whatsappInquiryLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-100 hover:text-cyan-300"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex items-center justify-between py-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl"
          >
            Bhaskar
            <span className="text-cyan-600"> Dental Clinic</span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#appointment" className="btn-primary hidden md:inline-flex">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex rounded-xl border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div id="mobile-menu" className="pb-4 md:hidden">
            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#appointment"
                onClick={closeMenu}
                className="btn-primary mt-1 w-full justify-center text-center"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Book Appointment
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Header
