const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Impact', 'impact'],
  ['Research', 'research'],
  ['Community', 'community'],
  ['Support', 'support'],
  ['Contact', 'contact'],
]

export default function Header({ route }) {
  return (
    <header className="header">
      <div className="shell header-shell">
        <a href="#/home" className="brand">
          <div className="brand-title">Liuli Society of America</div>
          <div className="brand-sub">A donor-facing nonprofit platform for nature protection and ecological stewardship</div>
        </a>

        <nav className="nav">
          {navItems.map(([label, key]) => (
            <a key={key} href={`#/${key}`} className={route === key ? 'nav-link active' : 'nav-link'}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#/support" className="button button-gold">Give Support</a>
      </div>
    </header>
  )
}
