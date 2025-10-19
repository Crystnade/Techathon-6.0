import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = { title: "Privacy • Finsta" };

export default function PrivacyPage(){
  return (
    <main className="site-container">
      <Header />
      <article className="card" aria-labelledby="privacy-title">
        <h2 id="privacy-title" className="hero-title">Privacy Policy</h2>
        <p className="card-text">We only collect data necessary to operate finsta, such as account details and content you create. We do not sell personal data. You can request data export or deletion by contacting support.</p>
        <p className="card-text">Cookies are used for essential functionality and to improve your experience.</p>
      </article>
      <Footer />
    </main>
  );
}
