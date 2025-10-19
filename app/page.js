import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import FeedPreview from "../components/FeedPreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="site-container">
      <div className="bg-blob bg-blob--one" aria-hidden="true" />
      <div className="bg-blob bg-blob--two" aria-hidden="true" />
      <Header />
      <Hero />
      <FeatureGrid />
      <FeedPreview />
      <Footer />
    </main>
  );
}
