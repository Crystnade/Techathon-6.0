import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = { title: "Sign up • Finsta" };

export default function SignUpPage(){
  return (
    <main className="site-container">
      <Header />
      <section className="hero" aria-labelledby="signup-title">
        <div>
          <h2 id="signup-title" className="hero-title">Create your account</h2>
          <p className="hero-sub">Join finsta and start sharing. No clutter, just good vibes.</p>
          <form className="card form" action="#" method="post">
            <div className="field">
              <label htmlFor="name" className="label">Name</label>
              <input id="name" name="name" type="text" className="input" required />
            </div>
            <div className="field">
              <label htmlFor="email" className="label">Email</label>
              <input id="email" name="email" type="email" className="input" required />
            </div>
            <div className="field">
              <label htmlFor="password" className="label">Password</label>
              <input id="password" name="password" type="password" className="input" required />
            </div>
            <div className="hero-actions">
              <button type="submit" className="btn btn--primary">Sign up</button>
              <a className="btn" href="/explore">Browse first</a>
            </div>
          </form>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="phone">
            <div className="screen">
              <div className="topbar"><span className="dot"/><span className="dot"/><span className="dot"/></div>
              <img src="/card-placeholder-1.svg" alt="Signup preview" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
