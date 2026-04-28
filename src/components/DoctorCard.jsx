import { BadgeCheck } from 'lucide-react'

function DoctorCard({ doctor }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_44px_rgba(18,42,67,0.1)] transition hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(18,42,67,0.16)]">
      <img
        src={doctor.image}
        alt={`${doctor.name} at Bhaskar Dental Clinic`}
        className="h-64 w-full object-cover"
        loading="lazy"
      />

      <div className="space-y-3 p-6">
        <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
        <p className="text-sm font-semibold text-cyan-700">{doctor.qualification}</p>
        <p className="text-sm text-slate-600">{doctor.specialization}</p>

        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
          <BadgeCheck className="h-4 w-4" aria-hidden="true" />
          {doctor.experience}
        </div>
      </div>
    </article>
  )
}

export default DoctorCard
