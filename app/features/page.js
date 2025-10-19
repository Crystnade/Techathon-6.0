import FeatureGrid from "../../components/FeatureGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = { title: "Features • Finsta" };

export default function FeaturesPage(){
  return (
    <main className="site-container">
      <Header />
      <section className="hero" aria-labelledby="features-title">
        <div>
          <h2 id="features-title" className="hero-title">What makes Finsta special</h2>
          <p className="hero-sub">Simple tools to create, discover, and connect with people you care about.</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="phone">
            <div className="screen">
              <div className="topbar"><span className="dot"/><span className="dot"/><span className="dot"/></div>
              <img src="/card-placeholder-2.svg" alt="Feature preview" />
            </div>
          </div>
        </div>
      </section>
      <FeatureGrid />
      <Footer />
    </main>
  );
}
