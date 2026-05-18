import { useInView } from '../useInView'

export default function Experience({ experience }) {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Trayectoria</p>
        <h2 className="section-title">Experiencia Laboral</h2>

        <div className="experience-timeline">
          {experience.map((job, i) => (
            <ExperienceCard key={job.id} job={job} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ job, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`experience-item fade-up ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="exp-meta">
        <span className="exp-period">{job.period}</span>
        <span className="exp-company">{job.company} · {job.location}</span>
      </div>
      <h3 className="exp-role">{job.role}</h3>
      <ul className="exp-bullets">
        {job.bullets.map((b, j) => (
          <li key={j}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

