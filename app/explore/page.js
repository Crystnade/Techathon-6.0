import FeedPreview from "../../components/FeedPreview";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = { title: "Explore • Finsta" };

export default function ExplorePage(){
  return (
    <main className="site-container">
      <Header />
      <section className="hero" aria-labelledby="explore-title">
        <div>
          <h2 id="explore-title" className="hero-title">Explore the latest</h2>
          <p className="hero-sub">A peek at what people are sharing right now.</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="phone">
            <div className="screen">
              <div className="topbar"><span className="dot"/><span className="dot"/><span className="dot"/></div>
              <img src="/card-placeholder-3.svg" alt="Explore preview" />
            </div>
          </div>
        </div>
      </section>
      <FeedPreview />
      <Footer />
    </main>
  );
}
