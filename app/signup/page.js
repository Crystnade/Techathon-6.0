import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SignUpForm from "../../components/SignUpForm";

export const metadata = { title: "Sign up • Finsta" };

export default function SignUpPage(){
  return (
    <main className="site-container">
      <Header />
      <section className="hero" aria-labelledby="signup-title">
        <div>
          <h2 id="signup-title" className="hero-title">Create your account</h2>
          <p className="hero-sub">Join finsta and start sharing. No clutter, just good vibes.</p>
          <SignUpForm />
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
