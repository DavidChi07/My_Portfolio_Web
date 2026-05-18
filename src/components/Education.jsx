import { useInView } from '../useInView'

export default function Education({ education }) {
  return (
    <section id="education">
      <div className="container">
        <p className="section-label">Formación</p>
        <h2 className="section-title">Educación</h2>

        {education.map((edu) => (
          <EduCard key={edu.id} edu={edu} />
        ))}
      </div>
    </section>
  )
}

function EduCard({ edu }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`edu-item fade-up ${inView ? 'in-view' : ''}`}>
      <div className="edu-year-badge">{edu.year}</div>
      <div>
        <h3 className="edu-degree">{edu.degree}</h3>
        <p className="edu-institution">
          {edu.faculty} — {edu.institution}
          <br />
          {edu.location}
        </p>
      </div>
    </div>
  )
}

