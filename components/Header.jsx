import Link from "next/link";

export default function Header(){
  return (
    <header className="navbar" role="banner">
      <Link className="brand" href="/" aria-label="Finsta home">
        <img src="/finsta-logo.svg" alt="Finsta logo" width="28" height="28" />
        <h1 className="brand-title">finsta</h1>
      </Link>
      <nav className="cta-row" aria-label="primary">
        <Link className="btn btn--ghost" href="/features">Features</Link>
        <Link className="btn btn--ghost" href="/explore">Explore</Link>
        <Link className="btn btn--primary" href="/signup">Sign up</Link>
      </nav>
    </header>
  );
}
