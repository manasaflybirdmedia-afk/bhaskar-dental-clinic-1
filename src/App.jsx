import { useEffect } from 'react'
import {
  Baby,
  BadgeCheck,
  Brush,
  Building2,
  CalendarDays,
  Camera,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Cross,
  Crown,
  Globe,
  HeartPulse,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  PlayCircle,
  ScanSearch,
  Scissors,
  Send,
  ShieldCheck,
  ShieldPlus,
  Siren,
  Smile,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Users,
  Wrench,
} from 'lucide-react'
import DoctorCard from './components/DoctorCard'
import Header from './components/Header'
import Reveal from './components/Reveal'
import SectionHeading from './components/SectionHeading'
import ServiceCard from './components/ServiceCard'
import TestimonialCard from './components/TestimonialCard'
import {
  contactInfo,
  doctors,
  footerServices,
  galleryItems,
  heroHighlights,
  navLinks,
  services,
  testimonials,
  whyChooseUs,
} from './data/siteData'

const iconMap = {
  Baby,
  BadgeCheck,
  Brush,
  ClipboardList,
  Cross,
  Crown,
  HeartPulse,
  Layers,
  ScanSearch,
  Scissors,
  ShieldCheck,
  ShieldPlus,
  Siren,
  Smile,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Users,
  Wrench,
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const currentYear = new Date().getFullYear()
  const whatsappNumber = '919553191391'
  const phoneDialLink = `tel:${contactInfo.phone.replace(/\s+/g, '')}`
  const whatsappEnquiryLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello Bhaskar Dental Clinic, I have an enquiry.'
  )}`

  const handleAppointmentSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name')?.toString().trim() || '-'
    const phone = formData.get('phone')?.toString().trim() || '-'
    const email = formData.get('email')?.toString().trim() || '-'
    const service = formData.get('service')?.toString().trim() || '-'
    const date = formData.get('date')?.toString().trim() || '-'
    const message = formData.get('message')?.toString().trim() || '-'

    const appointmentMessage = [
      'Hello Bhaskar Dental Clinic, I would like to book an appointment.',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Preferred Date: ${date}`,
      `Message: ${message}`,
    ].join('\n')

    const whatsappAppointmentLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      appointmentMessage
    )}`

    window.open(whatsappAppointmentLink, '_blank', 'noopener,noreferrer')
    form.reset()
  }

  return (
    <>
      <Header navLinks={navLinks} />

      <main id="home" className="overflow-hidden">
        <section className="relative soft-grid">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-14 sm:px-6 md:pt-16 lg:grid-cols-[1.15fr_0.95fr] lg:px-8 lg:pb-24">
            <Reveal className="flex flex-col justify-center">
              <p className="inline-flex w-fit rounded-full border border-cyan-200 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                Trusted Family Dental Care
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Your Smile, Our Priority
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                Complete dental care for the whole family with advanced
                technology and gentle treatment. Bhaskar Dental Clinic delivers
                preventive, cosmetic, restorative, and emergency dentistry under
                one roof.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#appointment" className="btn-primary">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Book Appointment
                </a>
                <a href="#services" className="btn-secondary">
                  View Services
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item, index) => {
                  const Icon = iconMap[item.iconKey]
                  return (
                    <Reveal
                      key={item.label}
                      delay={100 + index * 90}
                      className="rounded-2xl border border-cyan-100 bg-white/85 p-3"
                    >
                      <div className="mb-2 inline-flex rounded-xl bg-cyan-50 p-2 text-cyan-700">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <p className="text-xs font-semibold text-slate-700">
                        {item.label}
                      </p>
                    </Reveal>
                  )
                })}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="section-surface relative overflow-hidden p-3 md:p-4">
                <img
                  src="https://images.pexels.com/photos/5622014/pexels-photo-5622014.jpeg?cs=srgb&dl=pexels-gustavo-fring-5622014.jpg&fm=jpg"
                  alt="Patient smiling during dental consultation at Bhaskar Dental Clinic"
                  className="h-full min-h-[320px] w-full rounded-[1.6rem] object-cover"
                />
                <div className="absolute inset-x-8 bottom-7 rounded-2xl bg-slate-900/80 px-5 py-4 text-white backdrop-blur-sm">
                  <p className="text-sm font-semibold text-cyan-300">
                    Advanced & Gentle Dentistry
                  </p>
                  <p className="mt-1 text-sm">
                    From routine checkups to full-mouth implants
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Our Services"
                title="Complete Dental Services Near You"
                subtitle="Inspired by your shared references and expanded with full family dental care, our services cover preventive, cosmetic, orthodontic, implant, and emergency treatments."
                align="center"
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={Math.min(index * 45, 260)}>
                  <ServiceCard
                    icon={iconMap[service.iconKey]}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    imageAlt={service.imageAlt}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-cyan-50/60 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="About Bhaskar Dental Clinic"
                title="Modern Dentistry with a Human Touch"
                subtitle="Bhaskar Dental Clinic provides complete dental care using modern equipment, hygienic treatment rooms, and patient-friendly care. We believe every patient deserves clear guidance, transparent treatment planning, and a calm environment."
              />

              <ul className="mt-7 space-y-3">
                {[
                  'Digital diagnosis and evidence-based treatment planning',
                  'Strict sterilization standards in every operatory',
                  'Personalized family care for children and adults',
                  'Compassionate team focused on comfort and trust',
                ].map((point, index) => (
                  <Reveal
                    as="li"
                    key={point}
                    delay={80 + index * 70}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 flex-none text-cyan-600"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-700">{point}</span>
                  </Reveal>
                ))}
              </ul>
            </Reveal>

            <Reveal className="section-surface overflow-hidden p-3">
              <img
                src="https://images.pexels.com/photos/5355698/pexels-photo-5355698.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5355698.jpg&fm=jpg"
                alt="Dentist treating a patient in a sterilized clinic room"
                className="h-full min-h-[320px] w-full rounded-[1.6rem] object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Trusted Dental Care for Every Generation"
                subtitle="We combine experience, technology, and empathy so your treatment is effective, safe, and comfortable from the first visit."
                align="center"
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => {
                const Icon = iconMap[item.iconKey]
                return (
                  <Reveal key={item.title} delay={Math.min(index * 60, 260)}>
                    <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_28px_rgba(15,50,80,0.07)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,120,184,0.14)]">
                      <div className="mb-4 inline-flex rounded-2xl bg-cyan-50 p-3 text-cyan-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="doctors" className="bg-cyan-50/70 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Our Doctors"
                title="Meet Our Dental Specialists"
                subtitle="Experienced dentists committed to ethical treatment, long-term oral health, and natural-looking smile outcomes."
                align="center"
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {doctors.map((doctor, index) => (
                <Reveal key={doctor.name} delay={Math.min(index * 100, 240)}>
                  <DoctorCard doctor={doctor} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Gallery"
                title="Inside Bhaskar Dental Clinic"
                subtitle="Take a look at our clinic interiors, treatment workflow, and happy patient moments."
                align="center"
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <Reveal key={item.image} delay={Math.min(index * 70, 280)}>
                  <figure className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_35px_rgba(6,44,71,0.08)]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <figcaption className="px-5 py-4 text-sm font-semibold text-slate-700">
                      {item.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-cyan-50/70 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Testimonials"
                title="What Our Patients Say"
                subtitle="Real experiences from families and individuals who trusted us with their smile."
                align="center"
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.name} delay={Math.min(index * 90, 280)}>
                  <TestimonialCard testimonial={testimonial} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Appointment & Contact"
                title="Book Your Visit at Bhaskar Dental Clinic"
                subtitle="Fill the form and our team will contact you to confirm your preferred consultation slot."
                align="center"
              />
            </Reveal>

            <div
              id="appointment"
              className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
            >
              <Reveal className="section-surface p-6 sm:p-8">
                <form
                  className="grid gap-4 sm:grid-cols-2"
                  onSubmit={handleAppointmentSubmit}
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="input-field"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className="input-field"
                      placeholder="+91"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="input-field"
                      placeholder="yourname@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Service
                    </label>
                    <select id="service" name="service" className="input-field" required>
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="input-field"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="input-field resize-none"
                      placeholder="Tell us your concern or preferred time slot"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary w-full">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Submit Appointment Request
                    </button>
                    <p className="mt-2 text-center text-xs text-slate-500">
                      Appointment and enquiry details will be sent to WhatsApp{' '}
                      {contactInfo.whatsapp}.
                    </p>
                  </div>
                </form>
              </Reveal>

              <Reveal className="space-y-5">
                <div className="section-surface space-y-4 p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-slate-900">Contact Info</h3>

                  <a
                    href={phoneDialLink}
                    className="flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4 transition hover:border-cyan-300"
                  >
                    <PhoneCall className="mt-0.5 h-5 w-5 flex-none text-cyan-700" />
                    <span className="text-sm font-semibold text-slate-700">
                      {contactInfo.phone}
                    </span>
                  </a>

                  <a
                    href={whatsappEnquiryLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4 transition hover:border-cyan-300"
                  >
                    <MessageCircle className="mt-0.5 h-5 w-5 flex-none text-cyan-700" />
                    <span className="text-sm font-semibold text-slate-700">
                      {contactInfo.whatsapp}
                    </span>
                  </a>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4 transition hover:border-cyan-300"
                  >
                    <Mail className="mt-0.5 h-5 w-5 flex-none text-cyan-700" />
                    <span className="text-sm font-semibold text-slate-700">
                      {contactInfo.email}
                    </span>
                  </a>

                  <div className="flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                    <MapPin className="mt-0.5 h-5 w-5 flex-none text-cyan-700" />
                    <p className="text-sm font-semibold text-slate-700">
                      {contactInfo.address}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-700">
                      <Clock3 className="h-4 w-4" aria-hidden="true" />
                      <p className="text-sm font-bold">Opening Hours</p>
                    </div>
                    <ul className="space-y-1 text-sm text-slate-700">
                      {contactInfo.hours.map((hour) => (
                        <li key={hour}>{hour}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="section-surface p-6 sm:p-8">
                  <div className="rounded-2xl border border-cyan-200 bg-cyan-50/50 p-6 text-center">
                    <MapPin className="mx-auto h-8 w-8 text-cyan-700" aria-hidden="true" />
                    <h4 className="mt-3 text-lg font-bold text-slate-900">
                      Find Us on Google Maps
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">
                      Get turn-by-turn directions to our clinic for your visit.
                    </p>
                    <a
                      href={contactInfo.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary mt-5"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-14 text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-extrabold leading-none text-white">
              Bhaskar <span className="text-cyan-400">Dental Clinic</span>
            </h3>
            <span className="mt-1.5 text-xs font-bold uppercase tracking-[0.15em] text-cyan-400/90">
              & Implant Centre
            </span>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Clean, modern, and compassionate dental care for the whole family.
              We are committed to helping every patient smile with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a className="hover:text-cyan-300" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {footerServices.map((service) => (
                <li key={service} className="hover:text-cyan-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Contact Details</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <PhoneCall className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="#"
                className="rounded-full border border-slate-600 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-600 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
                aria-label="Instagram"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-600 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
                aria-label="YouTube"
              >
                <PlayCircle className="h-4 w-4" />
              </a>
              <a
                href={whatsappEnquiryLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-600 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 px-4 pt-6 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
          &copy; {currentYear} Bhaskar Dental Clinic. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 z-40">
        <a
          href={whatsappEnquiryLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/35 transition hover:bg-emerald-600"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp Us
        </a>
      </div>

      <div className="fixed bottom-4 right-4 z-40">
        <a
          href={phoneDialLink}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:bg-slate-800"
        >
          <PhoneCall className="h-4 w-4" aria-hidden="true" />
          Call Us
        </a>
      </div>
    </>
  )
}

export default App

