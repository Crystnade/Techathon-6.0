export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <span>© {new Date().getFullYear()} finsta</span>
      <nav className="cta-row" aria-label="secondary">
        <a className="btn btn--ghost" href="#">Terms</a>
        <a className="btn btn--ghost" href="#">Privacy</a>
      </nav>
    </footer>
  );
}
