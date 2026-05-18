export default function Navbar({ name }) {
  const sections = [
    { label: "Experiencia", href: "#experience" },
    { label: "Habilidades", href: "#skills" },
    { label: "Educación", href: "#education" },
    { label: "Idiomas", href: "#languages" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-brand">{name.split(" ").slice(0, 2).join(" ")}</a>
      <ul className="navbar-links">
        {sections.map((s) => (
          <li key={s.href}>
            <a href={s.href}>{s.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
