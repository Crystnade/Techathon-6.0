export default function Header(){
  return (
    <header className="navbar" role="banner">
      <a className="brand" href="#" aria-label="Finsta home">
        <img src="/finsta-logo.svg" alt="Finsta logo" width="28" height="28" />
        <h1 className="brand-title">finsta</h1>
      </a>
      <nav className="cta-row" aria-label="primary">
        <a className="btn btn--ghost" href="#features">Features</a>
        <a className="btn btn--ghost" href="#feed">Explore</a>
        <a className="btn btn--primary" href="#signup">Sign up</a>
      </nav>
    </header>
  );
}
