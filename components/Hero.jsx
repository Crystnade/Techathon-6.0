export default function Hero(){
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <h2 id="hero-title" className="hero-title">Share moments. Find friends.</h2>
        <p className="hero-sub">Finsta is a small, friendly space to post, discover, and connect. Clean design, zero clutter, instant vibes.</p>
        <div className="hero-actions">
          <a className="btn btn--primary" href="#signup">Get started</a>
          <a className="btn" href="#feed">See the feed</a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="ring r1" />
        <div className="ring r2" />
        <div className="phone">
          <div className="screen">
            <div className="topbar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <img src="/card-placeholder-1.svg" alt="App preview" />
          </div>
        </div>
      </div>
    </section>
  );
}
