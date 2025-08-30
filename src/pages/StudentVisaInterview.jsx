import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function StudentVisaInterview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-detail">
      <h1>🛫 Student Visa Interview Preparation: Tips to Succeed</h1>

      <p>
        Your student visa interview is one of the final steps toward studying
        abroad. Making a confident, honest, and structured impression can help
        you secure approval from visa officers. Here’s how to prepare like a
        pro.
      </p>

      <h2 style={{ color: "#d32f2f" }}>🎯 What Is a Student Visa Interview?</h2>
      <p>
        The interview assesses whether you're a genuine student, financially
        capable, and planning to return after your studies. It typically lasts
        10–15 minutes and involves questions about your academic background,
        university choice, finances, and future plans.
      </p>

      <h2 style={{ color: "#d32f2f" }}>📋 Common Visa Interview Questions</h2>
      <ul>
        <li>
          🇺🇸 <strong>Why did you choose this university/country?</strong>
        </li>
        <li>
          📚 <strong>What course will you study, and why?</strong>
        </li>
        <li>
          💰 <strong>Who is sponsoring your education?</strong>
        </li>
        <li>
          🏦 <strong>How will you manage living expenses abroad?</strong>
        </li>
        <li>
          🎓 <strong>What are your plans after graduation?</strong>
        </li>
        <li>
          📄 <strong>Can you explain your academic gap (if any)?</strong>
        </li>
        <li>
          🌍 <strong>Why not study in your home country?</strong>
        </li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}> Dos and Don’ts During the Interview</h2>
      <h3 style={{ color: "#d32f2f" }}>✔️ Do:</h3>
      <ul>
        <li>Speak clearly and confidently in English</li>
        <li>Give honest and to-the-point answers</li>
        <li>Maintain eye contact and positive body language</li>
        <li>Support your answers with facts and documents</li>
        <li>
          Carry organized files (I-20/Offer Letter, Passport, Bank Statements,
          SOP, etc.)
        </li>
      </ul>

      <h3 style={{ color: "#d32f2f" }}>❌ Don’t:</h3>
      <ul>
        <li>Lie or exaggerate — officers verify details</li>
        <li>Sound rehearsed or robotic</li>
        <li>
          Show nervous behavior (shaking, whispering, avoiding eye contact)
        </li>
        <li>Give vague or irrelevant answers</li>
        <li>Criticize your home country or compare it negatively</li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>💬 Sample Answer Example</h2>
      <p>
        <strong>Q: Why did you choose the University of XYZ?</strong>
      </p>
      <p>
        “I chose the University of XYZ because it offers a highly ranked
        Master’s program in Data Science with hands-on learning and internship
        opportunities. The curriculum aligns with my long-term goal of working
        in AI research. Also, the university has strong industry connections,
        which I find very valuable.”
      </p>

      <h2 style={{ color: "#d32f2f" }}>📁 Documents You Should Carry</h2>
      <ul>
        <li> Passport & Visa Application Confirmation</li>
        <li> Admission Letter (I-20, CAS, Offer Letter)</li>
        <li>Proof of Funds (bank statements, scholarships, sponsor letters)</li>
        <li> Academic Certificates & Transcripts</li>
        <li> SOP, LORs, and Resume (optional but helpful)</li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>🚀 Confidence-Building Tips</h2>
      <ul>
        <li>Practice with mock interviews (record yourself)</li>
        <li>Join The Sanvi's Abroad Xperts visa preparation sessions</li>
        <li>Learn from past student experiences and sample videos</li>
        <li>Dress professionally and arrive early on interview day</li>
      </ul>

      <h2 style={{ color: "#d32f2f" }}>🏁 Final Advice</h2>
      <p>
        Treat your visa interview like a conversation, not an exam. Be genuine,
        stay calm, and focus on your purpose — your dream of studying abroad.
        Preparation is key, and with the right approach, your visa approval is
        within reach! <strong>Trust The Sanvi's Academy </strong> to guide you
        every step of the way.
      </p>

      <div className="course-pagination">
        {/* Left: Previous */}
        <div>
          <Link to="/blog/gre-vocabulary" className="nav-btn">
            ⟵ Previous
          </Link>
        </div>

        {/* Right: Next */}
        <div>
          <Link to="/blog/best-apps-2025" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentVisaInterview;
