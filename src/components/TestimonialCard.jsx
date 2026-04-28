import { Quote, Star } from 'lucide-react'

function TestimonialCard({ testimonial }) {
  return (
    <article className="relative rounded-3xl border border-cyan-100 bg-white p-6 shadow-[0_15px_45px_rgba(8,63,100,0.08)]">
      <div className="absolute right-5 top-5 rounded-full bg-cyan-50 p-2 text-cyan-600">
        <Quote className="h-4 w-4" aria-hidden="true" />
      </div>

      <h3 className="text-lg font-bold text-slate-900">{testimonial.name}</h3>
      <p className="text-sm font-medium text-slate-500">{testimonial.role}</p>

      <div
        className="mt-4 flex items-center gap-1 text-amber-400"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {testimonial.review}
      </p>
    </article>
  )
}

export default TestimonialCard
