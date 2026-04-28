const alignMap = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`flex flex-col gap-4 ${alignMap[align]} ${className}`}>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-slate-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
