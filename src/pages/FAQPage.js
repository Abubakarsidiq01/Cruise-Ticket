import React, { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do you reduce carbon emissions by 70%?',
      answer: 'We use advanced biofuel blends made from sustainable sources like waste cooking oil and algae. Combined with energy-efficient ship designs and optimized routes, we achieve a 70% reduction compared to conventional marine diesel.'
    },
    {
      question: 'What is included in the ticket price?',
      answer: 'Your ticket includes the cabin accommodation, access to all public areas, basic dining options, and entertainment. Premium dining, spa services, and some activities may require additional payment.'
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer: 'Yes, you can cancel or modify your booking up to 48 hours before departure. Cancellations made more than 7 days in advance receive a full refund. Between 7-48 hours, a 50% refund applies. Modifications may incur a small fee.'
    },
    {
      question: 'Are the cabins accessible for people with disabilities?',
      answer: 'Yes, we have accessible cabins available on all routes. These cabins feature wider doorways, accessible bathrooms, and are located near elevators. Please mention any accessibility requirements when booking.'
    },
    {
      question: 'What should I bring on the cruise?',
      answer: 'Pack comfortable clothing, a jacket for deck areas, any medications you need, and travel documents. Most cabins have basic toiletries, but you may want to bring your preferred brands.'
    },
    {
      question: 'Is WiFi available on board?',
      answer: 'Yes, WiFi is available throughout the ship. Basic WiFi is included with all tickets. Premium high-speed WiFi is available for purchase if needed for streaming or video calls.'
    },
    {
      question: 'Can I bring my pet?',
      answer: 'Service animals are welcome. Unfortunately, we cannot accommodate pets at this time due to health and safety regulations.'
    },
    {
      question: 'What happens if the weather is bad?',
      answer: 'Our ships are designed to handle various weather conditions safely. In extreme cases where departure must be delayed, we will notify you immediately and offer rebooking options or full refunds.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="hero-badge">Help Center</div>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about EcoVoyage cruises, booking, and sustainability</p>
      </section>

      <section className="faq-content">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h2>Still have questions?</h2>
          <p>Our support team is here to help</p>
          <a href="/contact" className="btn-primary btn-large">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;

