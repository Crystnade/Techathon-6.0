import Link from "next/link";

export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <span>© {new Date().getFullYear()} finsta</span>
      <nav className="cta-row" aria-label="secondary">
        <Link className="btn btn--ghost" href="/terms">Terms</Link>
        <Link className="btn btn--ghost" href="/privacy">Privacy</Link>
      </nav>
    </footer>
  );
}
