import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = { title: "Terms • Finsta" };

export default function TermsPage(){
  return (
    <main className="site-container">
      <Header />
      <article className="card" aria-labelledby="terms-title">
        <h2 id="terms-title" className="hero-title">Terms of Service</h2>
        <p className="card-text">By using finsta, you agree to post content you have rights to share, respect others, and comply with applicable laws. We may remove content that violates these terms or our community guidelines.</p>
        <p className="card-text">We provide the service as-is without warranties. Your continued use means acceptance of any updates to these terms.</p>
      </article>
      <Footer />
    </main>
  );
}
