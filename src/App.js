import React from 'react';
import './App.css';
import portrait from './images/adrien-navarre.png';
import tickertrendsLogo from './images/tickertrends.svg';

const Arrow = () => <span aria-hidden="true">↗</span>;
const links = [
  ['LinkedIn', 'https://www.linkedin.com/in/adriennav/'],
  ['GitHub', 'https://github.com/Crypto-Advisor'],
  ['YouTube', 'https://www.youtube.com/@adrien_nav'],
];

function App() {
  return (
    <div className="portfolio" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#top" aria-label="Adrien Navarre home">adrien<span> / </span>navarre</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#background">Background</a>
          <a href="mailto:adrien@tickertrends.io">Get in touch <Arrow /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <h1 id="hero-title">Adrien Navarre.<br /><span>Building TickerTrends.</span></h1>
          <div className="hero-bottom">
            <p>Founder working across institutional finance,<br className="desktop-break" /> alternative data, and software.</p>
            <a className="text-link" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-caption"><span>Currently building TickerTrends</span><span>Finance / Software / Robotics</span></div>
        </section>

        <section className="work-section wrap" id="work" aria-labelledby="work-title">
          <div className="section-label"><span>01 / Current focus</span><span>From data to decisions</span></div>
          <div className="featured-work">
            <div className="work-story">
              <img className="company-mark" src={tickertrendsLogo} alt="" width="44" height="44" />
              <div>
                <p className="eyebrow">CEO & Founder</p>
                <h2 id="work-title">TickerTrends</h2>
                <p className="work-description">Alternative data.<br />A different perspective on markets.</p>
                <p className="supporting-copy">Leading a team building alternative data solutions for institutional investors.</p>
                <a className="text-link" href="https://tickertrends.io" target="_blank" rel="noopener noreferrer">Visit TickerTrends <Arrow /></a>
              </div>
            </div>
            <div className="work-proof">
              <div className="ranking"><span className="ranking-number">#2</span><p>Highest-traffic financial alternative data business</p></div>
              <div className="ranking"><span className="ranking-number">#1</span><p>Most followed on social media in financial alternative data</p></div>
              <p className="organic-note">All grown through organic content.</p>
              <div className="proof-footer"><span>Institutional investors</span><span aria-hidden="true">↗</span></div>
            </div>
          </div>
        </section>

        <section className="background-section wrap" id="background" aria-labelledby="background-title">
          <div className="background-intro">
            <p className="section-label">02 / Background</p>
            <img className="portrait" src={portrait} alt="Adrien Navarre" width="512" height="512" loading="lazy" />
            <h2 id="background-title">A background in finance.<br /><span>A foundation in engineering.</span></h2>
            <p>My work spans quantitative finance, full-stack development, and robotics automation. I like connecting technical depth with real-world problems.</p>
          </div>
          <div className="experience-list">
            <article className="experience"><span className="experience-number">01</span><div><h3>TickerTrends</h3><p>CEO & Founder</p></div><span className="experience-status">Current</span></article>
            <article className="experience"><span className="experience-number">02</span><div><h3>Anantak Robotics</h3><p>Project Manager · Robotics Engineer</p></div><span className="experience-status">Previously</span></article>
            <article className="experience"><span className="experience-number">03</span><div><h3>Kilonova Ventures</h3><p>Analyst</p></div><span className="experience-status">Previously</span></article>
          </div>
        </section>

        <section className="education-section wrap" aria-labelledby="education-title">
          <h2 className="section-label" id="education-title">Education</h2>
          <div className="education-content">
            <ul className="education-schools"><li>Harvard-Westlake</li><li>George Washington University</li><li>Southern Methodist University</li></ul>
            <p className="education-fields"><span>Fields of study</span>Electrical Engineering &amp; Computer Science</p>
          </div>
        </section>

        <section className="practice-section wrap" aria-labelledby="practice-title">
          <div className="section-label"><h2 id="practice-title">03 / Technical practice</h2></div>
          <div className="practice-grid">
            <article><span className="practice-index">I.</span><h3>Markets & data</h3><p>Quantitative finance and alternative data. At 14–15, I started a YouTube channel about quantitative finance that grew to 20,000 followers.</p><span className="stack">Python / PostgreSQL / MongoDB</span></article>
            <article><span className="practice-index">II.</span><h3>Software</h3><p>Full-stack development, including machine learning, from the interface to the infrastructure behind it.</p><span className="stack">TypeScript / React / Node.js / Docker</span></article>
            <article><span className="practice-index">III.</span><h3>Robotics & systems</h3><p>Engineering and automation where software meets the physical world.</p><span className="stack">C / C++ / Rust / Python</span></article>
          </div>
        </section>

        <section className="contact-section wrap" aria-labelledby="contact-title">
          <p className="section-label">04 / Connect</p>
          <div className="contact-heading"><h2 id="contact-title">Let’s talk.</h2><a className="contact-arrow" href="mailto:adrien@tickertrends.io" aria-label="Email Adrien"><Arrow /></a></div>
          <a className="email-link" href="mailto:adrien@tickertrends.io">adrien@tickertrends.io</a>
        </section>
      </main>

      <footer className="site-footer wrap"><span>© {new Date().getFullYear()} Adrien Navarre</span><div>{links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label} <Arrow /></a>)}</div><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
