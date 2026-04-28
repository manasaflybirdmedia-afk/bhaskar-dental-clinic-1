function Reveal({ as: Tag = 'div', children, className = '', delay = 0 }) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
