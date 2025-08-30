import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import IELTS from "./pages/IELTS";
import TOEFL from "./pages/TOEFL";
import PTE from "./pages/PTE";
import GRE from "./pages/GRE";
import SAT from "./pages/SAT";
import Duolingo from "./pages/Duolingo";
import French from "./pages/French";
import German from "./pages/German";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./components/Courses";
import TechnicalSkills from "./components/TechnicalSkills";
import Cybersecurity from "./pages/Cybersecurity";

import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";

// Blog Pages
import IELTSTips from "./pages/IELTSTIPS";
import StudyAbroad2025 from "./pages/StudyAbroad2025";
import GREVocabulary from "./pages/GREVocabulary";
import StudentVisaInterview from "./pages/StudentVisaInterview";
import SpeakingMistakes from "./pages/SpeakingMistakes";
import EuropeUniversities from "./pages/EuropeUniversities";
import IELTSvsTOEFLvsDuolingoPTE from "./pages/IELTSvsTOEFLvsDuolingoPTE";
import BestApps2025 from "./pages/BestApps2025";

// ✅ Error fallback component
function ErrorFallback({ error }) {
  return (
    <div role="alert" style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Something went wrong.</h2>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ielts" element={<IELTS />} />
          <Route path="/toefl" element={<TOEFL />} />
          <Route path="/pte" element={<PTE />} />
          <Route path="/gre" element={<GRE />} />
          <Route path="/sat" element={<SAT />} />
          <Route path="/duolingo" element={<Duolingo />} />
          <Route path="/french" element={<French />} />
          <Route path="/german" element={<German />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/technical-skills" element={<TechnicalSkills />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Blog Pages */}
          <Route path="/blog/ielts-tips" element={<IELTSTips />} />
          <Route path="/blog/study-abroad-2025" element={<StudyAbroad2025 />} />
          <Route path="/blog/gre-vocabulary" element={<GREVocabulary />} />
          <Route
            path="/blog/student-visa-interview"
            element={<StudentVisaInterview />}
          />
          <Route path="/blog/best-apps-2025" element={<BestApps2025 />} />
          <Route
            path="/blog/speaking-mistakes"
            element={<SpeakingMistakes />}
          />
          <Route
            path="/blog/europe-universities"
            element={<EuropeUniversities />}
          />
          <Route
            path="/blog/ielts-vs-toefl-vs-duolingo-vs-pte"
            element={<IELTSvsTOEFLvsDuolingoPTE />}
          />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
}

export default App;
