import { ArrowRight } from 'lucide-react'

function ServiceCard({ icon: Icon, title, description, image, imageAlt }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-cyan-100 bg-white p-6 shadow-[0_16px_40px_rgba(12,57,95,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:shadow-[0_18px_50px_rgba(0,120,184,0.18)]">
      <div className="relative mb-5 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={imageAlt}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-cyan-700 shadow-sm backdrop-blur">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      <a
        href="#appointment"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition group-hover:text-cyan-800"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </article>
  )
}

export default ServiceCard
