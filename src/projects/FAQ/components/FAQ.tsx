import { useState } from "react";
import "../faq.css";

interface Ifaq {
  id: number;
  title: string;
  content: string;
}

const faqData: Ifaq[] = [
  {
    id: 1,
    title: "Why shouldn't we trust atoms?",
    content: "They make up everything.",
  },
  {
    id: 2,
    title: "Why did the scarecrow win an award?",
    content: "Because he was outstanding in his field!",
  },
  {
    id: 3,
    title: "Why don't skeletons fight each other?",
    content: "They don't have the guts.",
  },
  { id: 4, title: "What do you call fake spaghetti?", content: "An impasta!" },
  {
    id: 5,
    title: "Why did the math book look sad?",
    content: "It had too many problems.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    
    
   
  setActiveId((prevId) =>  {
    console.log(prevId);
    console.log(id);
    return (prevId === id ? null : id)
  });
};
  const renderFaqData = faqData.map(({ id, title, content }) => {
    
    const isOpen = activeId === id;
    console.log(isOpen, "id:", id , activeId);
    return (
      <div className={`box ${isOpen ? "high" : ""}`} key={id}>
        <div className="row">
          <h3>{title}</h3>
          <div className="icons">
            <i
              className={`fas fa-chevron-down ${isOpen ? "hid" : "block"}`}
              onClick={() => toggleFAQ(id)}
            ></i>
            <i
              className={`fas fa-times ${isOpen ? "block" : "hid"}`}
              onClick={() => toggleFAQ(id)}
            ></i>
          </div>
        </div>
        {isOpen && <p>{content}</p>}
      </div>
    );
  });

  return <div className="container">{renderFaqData}</div>;
};

export default FAQ;
