import { useInView } from '../useInView'

export default function Skills({ skills }) {
  const [barRef, barsInView] = useInView(0.2)

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Capacidades</p>
        <h2 className="section-title">Habilidades</h2>

        <div className="skills-grid" ref={barRef}>
          {/* Technical */}
          <div>
            <p className="skills-col-title">Técnicas</p>
            {skills.technical.map((s, i) => (
              <div className="skill-item" key={s.name}>
                <div className="skill-header">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      width: barsInView ? `${s.level}%` : '0%',
                      transitionDelay: `${i * 0.08}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Soft */}
          <div>
            <p className="skills-col-title">Habilidades Blandas</p>
            <ul className="soft-list">
              {skills.soft.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

