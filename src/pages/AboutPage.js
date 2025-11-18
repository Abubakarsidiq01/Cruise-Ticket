import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-badge">Our Story</div>
        <h1>About EcoVoyage</h1>
        <p className="about-tagline">Leading the way in sustainable maritime travel across Northern Europe</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <div className="section-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            EcoVoyage was founded with a simple yet powerful mission: to make sustainable travel 
            accessible to everyone. We believe that exploring the world shouldn't come at the 
            expense of our planet. Through innovative biofuel technology and carbon-neutral 
            operations, we're proving that luxury and sustainability can coexist.
          </p>
          <p>
            Every journey with us contributes to a cleaner future. We're not just a cruise line—we're 
            a movement towards responsible tourism that respects both our passengers and our planet.
          </p>
        </div>

        <div className="about-section">
          <div className="section-icon">⚡</div>
          <h2>Our Technology</h2>
          <p>
            Our fleet uses advanced biofuel blends that reduce carbon emissions by up to 70% 
            compared to conventional marine diesel. This cutting-edge technology, combined with 
            energy-efficient ship designs and waste reduction programs, makes EcoVoyage one of 
            the most environmentally responsible cruise operators in Northern Europe.
          </p>
          <p>
            We continuously invest in research and development to improve our environmental 
            performance, working with leading maritime engineering firms to push the boundaries 
            of sustainable shipping technology.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-number">1.2M+</div>
              <div className="impact-label">kg CO₂ Saved</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">50K+</div>
              <div className="impact-label">Eco-Conscious Travelers</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">15+</div>
              <div className="impact-label">Sustainable Routes</div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Commitment</h2>
          <p>
            We're committed to transparency in our environmental impact. Every booking shows 
            real-time carbon footprint calculations, and we're working towards complete 
            carbon neutrality by 2030. Join us in making travel sustainable for future 
            generations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

