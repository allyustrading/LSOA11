export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-shell">
        <div>
          <div className="footer-title">Liuli Society of America</div>
          <p className="footer-text">
            Liuli Society of America advances environmental responsibility,
            ecological awareness, wellness education, and community-centered public benefit.
            This version is designed to speak clearly to donors, foundations, and mission-aligned institutions.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#/about">About</a>
            <a href="#/impact">Impact</a>
            <a href="#/research">Research</a>
            <a href="#/community">Community</a>
          </div>
          <div className="footer-col">
            <h4>Engage</h4>
            <a href="#/support">Support</a>
            <a href="#/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© 2026 Liuli Society of America</span>
        <span>Registered U.S. nonprofit organization</span>
        <span>Ecological stewardship. Donor trust. Public value.</span>
      </div>
    </footer>
  )
}
