export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-grid">

        <div className="about-text">

          <h2>
            ABOUT
            <br />
            ME
          </h2>

          <div className="hero-line" />

          <p>
            I am a technology enthusiast with experience across
            AI, Machine Learning, Data Science, and Frontend Development.
          </p>

          <p>
            I enjoy turning complex problems into intelligent
            and useful digital solutions.
          </p>

          <button className="secondary-button">
            DOWNLOAD CV
          </button>

        </div>

      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>AI L</h3>

          <ul>
            <li>Machine Learning</li>
            <li>Computer Vision</li>
            <li>Generative AI</li>
            <li>LLM & RAG</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>DATA SCIENCE</h3>

          <ul>
            <li>Data Analysis</li>
            <li>Machine Learning</li>
            <li>Visualization</li>
            <li>Insight & Prediction</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>FRONTEND</h3>

          <ul>
            <li>React / Next.js</li>
            <li>UI / UX</li>
            <li>Responsive Design</li>
            <li>Web Application</li>
          </ul>
        </div>

      </div>

    </section>
  );
}