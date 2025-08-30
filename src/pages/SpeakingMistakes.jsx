import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SpeakingMistakes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-detail">
      <h1>
        Top Mistakes Students Make in Speaking Tests (IELTS | TOEFL | PTE)
      </h1>

      <p>
        The speaking test can be intimidating — but many students lose marks due
        to simple, avoidable mistakes. Whether it’s filler words, lack of
        structure, or poor fluency, knowing what to avoid can significantly
        boost your performance.
      </p>

      <h2 style={{ color: "#d32f2f" }}>🚫 Common Mistakes Students Make</h2>
      <ul>
        <li>
          <strong>Long pauses and hesitation:</strong> Shows lack of fluency and
          confidence.
        </li>
        <li>
          <strong>Repeating phrases:</strong> Repeating the same point or
          vocabulary indicates weak language range.
        </li>
        <li>
          <strong>Off-topic responses:</strong> Not answering the exact question
          asked lowers coherence.
        </li>
        <li>
          <strong>Very short answers:</strong> You miss chances to show your
          grammar and vocabulary skills.
        </li>
        <li>
          <strong>Overusing filler words:</strong> “Umm”, “like”, “you know”
          reduces clarity and professionalism.
        </li>
        <li>
          <strong>Incorrect pronunciation or monotone tone:</strong> Affects
          intelligibility and listener engagement.
        </li>
      </ul>

      <h2> Tips to Avoid These Mistakes</h2>
      <ul>
        <li>
          <strong>Practice with a timer:</strong> Learn to express ideas
          smoothly within a fixed time.
        </li>
        <li>
          <strong>Use a structure:</strong> For each answer, follow a pattern:{" "}
          <em>Point – Reason – Example – Result</em>.
        </li>
        <li>
          <strong>Improve vocabulary:</strong> Use topic-specific words to sound
          more fluent and confident.
        </li>
        <li>
          <strong>Record and review:</strong> Identify your weak spots by
          listening to your own responses.
        </li>
        <li>
          <strong>Listen to native content:</strong> Watch TED Talks, podcasts,
          and English interviews to absorb real-life speech rhythm.
        </li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>🧠 Speaking Test Breakdown</h2>
      <p>
        Here's what examiners look for in speaking modules like IELTS, TOEFL,
        and PTE:
      </p>
      <ul>
        <li>
          <strong>Fluency and Coherence:</strong> Are your ideas flowing
          logically without frequent stops?
        </li>
        <li>
          <strong>Pronunciation:</strong> Can the listener clearly understand
          your words and intonation?
        </li>
        <li>
          <strong>Grammatical Range and Accuracy:</strong> Do you use tenses,
          clauses, and structures correctly?
        </li>
        <li>
          <strong>Lexical Resource:</strong> Are you using a rich variety of
          words instead of basic ones?
        </li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>🚀 Boost Your Speaking Confidence</h2>
      <p>Try these final confidence boosters:</p>
      <ul>
        <li> Speak with friends, mentors, or AI tools every day</li>
        <li> Keep a journal of new words and expressions</li>
        <li> Practice speaking in front of a mirror to build fluency</li>
        <li>
          Join speaking mock tests<strong> The Sanvi’s Academy</strong> for
          expert evaluation
        </li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>🎯 Final Thought</h2>
      <p>
        Speaking tests are not about perfection — they’re about expressing
        yourself clearly and confidently. Practice smart, avoid the common
        pitfalls, and you’re sure to impress the examiner. Let{" "}
        <strong>The Sanvi’s Academy</strong> help you speak with confidence and
        clarity.
      </p>

      <div className="course-pagination">
        {/* Left: Previous */}
        <div>
          <Link to="/blog/best-apps-2025" className="nav-btn">
            ⟵ Previous
          </Link>
        </div>

        {/* Right: Next */}
        <div>
          <Link to="/blog/europe-universities" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SpeakingMistakes;
