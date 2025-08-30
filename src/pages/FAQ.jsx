import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "  What courses does The Sanvi’s Academy offer?",
    answer:
      "We offer expert coaching for IELTS, TOEFL, SAT, GRE, GMAT, Duolingo, French, German, and more — all tailored to help students reach their highest potential.",
  },
  {
    question: " Are classes available online or offline?",
    answer:
      "The classes are held online and can be attended from the comfort of your home. The sessions include interactive lessons, doubt-clearing sessions, and regular progress tracking. We also provide access to recorded classes so you never miss a concept.",
  },
  {
    question: " Do you assist with study abroad applications?",
    answer:
      "Absolutely. Our dedicated study abroad team The Sanvi's Abroad Xperts guides students through every step of the overseas education journey — from selecting the right country and university to crafting a strong SOP (Statement of Purpose), getting powerful LORs (Letters of Recommendation), applying for scholarships, and filing student visas. We specialize in destinations like the Italy, France, Germany, other European countries, Switzerland, UK, Singapore, Japan, USA and Cannada.",
  },
  {
    question: " Who are the instructors at The Sanvi’s Academy?",
    answer:
      "Our instructors are certified language trainers, subject experts, and test prep specialists with years of international teaching experience. Many are former high-scorers in exams like IELTS, GRE, and TOEFL. They follow result-driven strategies, and adapt teaching based on each student’s pace and learning style.",
  },
  {
    question: " What is the typical batch size?",
    answer:
      "We keep our batch sizes small, typically 8 to 12 students per session. This enables personalized attention, active participation, and a more engaging classroom environment. Our trainers ensure that each student receives tailored guidance to address individual strengths and weaknesses.",
  },
  {
    question: " Can I attend a free demo class?",
    answer:
      "Yes! We strongly encourage prospective students to attend a free demo class to experience our teaching quality and methodology firsthand. You’ll get a clear overview of how sessions are conducted, interact with faculty, and gain insight into the course structure before making a commitment.",
  },
  {
    question: " Do you provide study materials and mock tests?",
    answer:
      "Definitely. We provide up-to-date study materials, topic-wise practice sets, vocabulary banks, grammar boosters, and access to full-length mock tests. Our AI-powered assessment tools offer detailed analytics, highlight your strengths and weaknesses, and help you improve quickly. All materials are aligned with the latest test patterns.",
  },
  {
    question: " How can I contact or register at The Sanvi’s Academy?",
    answer:
      "Getting started is easy! You can contact us through our official website, call our admissions team, send a WhatsApp message, or walk into our center. Online registration forms are also available. Once we receive your inquiry, our counselors will connect with you to recommend the right course and batch timing based on your goals.",
  },
  {
    question: " What makes The Sanvi’s Academy different?",
    answer:
      "What sets us apart is our student-first approach. We provide result-oriented training, small batches, modern learning tools, and a global outlook. From coaching to visa processing, we ensure you’re guided at every stage. Our mission is not just to teach — it’s to empower students to thrive on International platforms.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <div className="course-pagination">
        <div className="course-navigation">
          <Link to="/blog" className="nav-btn">
            ⟵ Previous
          </Link>
          <Link to="/" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default FAQ;
