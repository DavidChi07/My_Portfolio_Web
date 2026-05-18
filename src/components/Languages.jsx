import { useInView } from '../useInView'

export default function Languages({ languages }) {
  const [barRef, barsInView] = useInView(0.2)

  return (
    <section id="languages">
      <div className="container">
        <p className="section-label">Comunicación</p>
        <h2 className="section-title">Idiomas</h2>

        <div className="lang-grid" ref={barRef}>
          {languages.map((lang, i) => (
            <div
              className="lang-item"
              key={lang.name}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="lang-name">{lang.name}</p>
              <p className="lang-level">{lang.level}</p>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{
                    width: barsInView ? `${lang.percent}%` : '0%',
                    transitionDelay: `${i * 0.15}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

