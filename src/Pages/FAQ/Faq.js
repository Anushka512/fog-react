import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./Faq.scss";

const Faq = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  const [toggleFaq, setToggleFaq] = useState(false);

  // List of FAQ topics and questions
  const faqData = [
    {
      topic: "Services",
      questions: [
        {
          question: "What is the purpose of this website?",
          answer:
            "The purpose of this website is to provide information about our products and services.",
        },
        {
          question: "How do I create an account?",
          answer:
            'To create an account, click on the "Sign Up" button in the top right corner of the page and follow the instructions.',
        },
        // More questions
      ],
    },
    {
      topic: "Billing",
      questions: [
        {
          question: "How do I update my payment information?",
          answer:
            'To update your payment information, go to the "Billing" section of your account settings.',
        },
        {
          question: "What forms of payment do you accept?",
          answer: "We accept Visa, Mastercard, and American Express.",
        },
        // More questions
      ],
    },
    {
      topic: "Delivery",
      questions: [
        {
          question: "Maximum time to deliver an order?",
          answer: "It depends upon the location and your order.",
        },
        {
          question: "Is cash on delivery available?",
          answer: "Yes,It is availbale.",
        },
        // More questions
      ],
    },
    // More topics
  ];

  // Filter the FAQ data based on search query
  const filteredData = faqData.filter((topic) => {
    // Filter topic by name
    if (topic.topic.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    }

    // Filter topic's questions by question text
    const filteredQuestions = topic.questions.filter((question) => {
      if (question.question.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
      }
      return false;
    });

    // Return the topic if any of its questions match the search query
    if (filteredQuestions.length > 0) {
      return true;
    }

    return false;
  });

  return (
    <div className="faq">
      <div className="hero">
        <h1>Frequently Asked Questions</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for a topic or question"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="content">
        <div className="left-section">
          <ul>
            {filteredData.map((topic) => (
              <li key={topic.topic}>
                <a href={`#${topic.topic}`}>{topic.topic}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-section">
          {filteredData.map((topic, id) => (
            <div id={topic.topic} className={`faq__card}`}>
              {/* <h3>{topic.questions[0].question}</h3> */}
              <h2>{topic.topic}</h2>
              {topic.questions.map((question) => (
                <div
                  className={`faq__card ${toggleFaq ? "active__class" : ""}`}
                >
                  <div className="top__bar">
                    <h4>{question.question}</h4>
                    <AiOutlineArrowUp
                      onClick={() => setToggleFaq(!toggleFaq)}
                    />
                  </div>
                  <div className="faq__desc">
                    <p>{question.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
