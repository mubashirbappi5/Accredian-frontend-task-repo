import { useState } from "react";

const faqs = [
  {
    category: "Eligibility",
    questions: [
      {
        question:
          "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        question: "What is the minimum system configuration required?",
        answer: "",
      },
    ],
  },
  {
    category: "How To Use?",
    questions: [],
  },
  {
    category: "Terms & Conditions",
    questions: [],
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Eligibility");
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="flex space-x-6 p-6 max-w-3xl mx-auto">
      {/* Sidebar */}
      <div className="flex flex-col space-y-2">
        {faqs.map((item) => (
          <button
            key={item.category}
            className={`px-4 py-2 border rounded-md text-left font-medium transition ${
              activeCategory === item.category
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveCategory(item.category)}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* FAQ Content */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="mt-4 space-y-4">
          {faqs
            .find((item) => item.category === activeCategory)
            ?.questions.map((q, index) => (
              <div key={index} className="border-b pb-2">
                <button
                  className="text-blue-600 font-medium w-full text-left flex justify-between items-center"
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                >
                  {q.question}
                  <span>{openQuestion === index ? "▲" : "▼"}</span>
                </button>
                {openQuestion === index && (
                  <p className="text-gray-700 mt-2">{q.answer}</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
