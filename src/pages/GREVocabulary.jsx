import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function GREVocabulary() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-detail">
      <h1 style={{ color: "#d32f2f" }}>
        Master Your Vocabulary for GRE/SAT – Boost Your Verbal Score
      </h1>

      <p>
        A strong vocabulary is the secret weapon to ace the verbal section of
        the GRE or SAT. Whether you're aiming for Ivy League admissions or a top
        score percentile, mastering word power is a must.
      </p>

      <h2 style={{ color: "#d32f2f" }}>Why Vocabulary Matters</h2>
      <p>
        Both the GRE and SAT place significant weight on vocabulary through
        reading comprehension, sentence equivalence, and text completion (GRE).
        Understanding nuanced meanings and context helps you interpret passages
        quickly and accurately.
      </p>

      <h2 style={{ color: "#d32f2f" }}>Sample Words You Must Know</h2>
      <ul>
        <li>
          <strong>Obfuscate</strong> – to confuse or make unclear
        </li>
        <li>
          <strong>Laconic</strong> – using very few words
        </li>
        <li>
          <strong>Ambivalent</strong> – having mixed feelings
        </li>
        <li>
          <strong>Ubiquitous</strong> – present everywhere
        </li>
        <li>
          <strong>Ephemeral</strong> – lasting a very short time
        </li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>Techniques to Memorize Effectively</h2>
      <ul>
        <li>
          <strong>Mnemonic Devices:</strong> Create mental stories to remember
          meanings.
        </li>
        <li>
          <strong>Flashcards:</strong> Use apps like Anki, Quizlet, or Magoosh
          to test daily.
        </li>
        <li>
          <strong>Root Words:</strong> Learn Latin and Greek roots to decode
          unfamiliar words.
        </li>
        <li>
          <strong>Usage Practice:</strong> Use new words in your daily writing
          and speech.
        </li>
        <li>
          <strong>Contextual Reading:</strong> Read editorials, The Economist,
          or NYT.
        </li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>How to Create Your Own Word List</h2>
      <p>Maintain a personal vocabulary journal. For each word:</p>
      <ul>
        <li>Write the meaning in your own words</li>
        <li>Note one sentence from a real source</li>
        <li>Use it in your own sentence</li>
        <li>Mark difficulty level (Easy/Medium/Hard)</li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>
        Apps to Supercharge Your Vocab Learning
      </h2>
      <ul>
        <li>Magoosh Vocabulary Builder</li>
        <li>Knudge.me</li>
        <li>Anki</li>
        <li>WordUp App</li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>
        Final Tips to Master GRE/SAT Vocabulary
      </h2>
      <ul>
        <li>Practice 15–20 new words daily</li>
        <li>Revise weekly with quizzes</li>
        <li>Build context—not just meaning</li>
        <li>Speak and write using new vocabulary regularly</li>
      </ul>

      <p>
        Building a strong vocabulary is a journey, not a sprint. With consistent
        effort and the right strategies, you’ll be ready to conquer even the
        trickiest GRE/SAT verbal questions. Let{" "}
        <strong>The Sanvi’s Academy</strong> guide you every step of the way!
      </p>

      <div className="course-pagination">
        {/* Left: Previous */}
        <div>
          <Link
            to="/blog/ielts-vs-toefl-vs-duolingo-vs-pte"
            className="nav-btn"
          >
            ⟵ Previous
          </Link>
        </div>

        {/* Right: Next */}
        <div>
          <Link to="/blog/student-visa-interview" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GREVocabulary;
