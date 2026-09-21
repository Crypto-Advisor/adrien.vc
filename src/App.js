import React from 'react';
import './App.css';
import portrait from './images/adrien-navarre.png';
import tickertrendsLogo from './images/tickertrends.svg';

const Arrow = () => <span aria-hidden="true">↗</span>;
const Monogram = () => (
  <svg className="royal-monogram" viewBox="0 0 64 64" aria-hidden="true">
    <rect className="monogram-border" x="3.5" y="3.5" width="57" height="57" />
    <rect className="monogram-border monogram-border-inner" x="7.5" y="7.5" width="49" height="49" />
    <path className="monogram-crown" d="M19 23l2-8 7 6 4-10 4 10 7-6 2 8H19zM21 26h22" />
    <text className="monogram-initials" x="32" y="46" textAnchor="middle">AN</text>
  </svg>
);
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
        <a className="wordmark" href="#top" aria-label="Adrien Navarre home"><Monogram /></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#background">Background</a>
          <a href="mailto:adrien@tickertrends.io">Get in touch <Arrow /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-grid">
            <h1 id="hero-title">Adrien Navarre.<br /><span>Building TickerTrends.</span></h1>
            <div className="portrait-frame hero-portrait">
              <img className="portrait" src={portrait} alt="Adrien Navarre" width="512" height="512" />
              <span className="portrait-seal"><Monogram /></span>
            </div>
            <div className="hero-bottom">
              <p>Founder building TickerTrends to challenge the alternative-data establishment<br className="desktop-break" /> through better technology and relentless execution.</p>
              <a className="text-link" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            </div>
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
                <p className="work-description">Alternative data.<br />Built to challenge the incumbents.</p>
                <p className="supporting-copy">Alternative data helps reveal what people and businesses may buy by analyzing how they interact with their devices. TickerTrends competes directly with established providers by moving faster, covering more, and delivering clearer answers.</p>
                <a className="text-link" href="https://tickertrends.io" target="_blank" rel="noopener noreferrer">Visit TickerTrends <Arrow /></a>
              </div>
            </div>
            <div className="work-proof">
              <div className="ranking"><span className="ranking-number">#2</span><p>Highest-traffic financial alternative data business</p></div>
              <div className="ranking"><span className="ranking-number">#1</span><p>Most followed on social media in financial alternative data</p></div>
              <p className="organic-note">All grown through organic content.</p>
            </div>
          </div>
        </section>

        <section className="background-section wrap" id="background" aria-labelledby="background-title">
          <div className="background-intro">
            <p className="section-label">02 / Background</p>
            <h2 id="background-title">A background in finance.<br /><span>A foundation in engineering.</span></h2>
            <p>My work spans quantitative finance, full-stack development, and robotics automation. I am fiercely competitive: I study where incumbents are vulnerable, then use better technology, faster iteration, and disciplined execution to outperform them.</p>
            <div className="profile-location"><span>Location</span><p>Dallas, Texas &amp; Malibu, California</p></div>
          </div>
          <div className="experience-list">
            <article className="experience"><span className="experience-number">01</span><div><h3>TickerTrends</h3><p>CEO & Founder</p></div><span className="experience-status">Current</span></article>
            <article className="experience"><span className="experience-number">02</span><div><h3>Anantak Robotics</h3><p>Project Manager · Robotics Engineer</p></div><span className="experience-status">Previously</span></article>
            <article className="experience"><span className="experience-number">03</span><div><h3>Kilonova Ventures</h3><p>Analyst</p></div><span className="experience-status">Previously</span></article>
          </div>
        </section>

        <section className="story-section wrap" aria-labelledby="story-title">
          <h2 id="story-title">From curiosity<br /><span>to company.</span></h2>
          <div className="story-copy">
            <p className="story-lede">I first became interested in markets as a teenager, when I started a YouTube channel about quantitative finance. The audience grew, but more importantly, it taught me to follow questions wherever they led.</p>
            <p>At university, I studied computer science while working in robotics and machine learning. Most evenings, I drove to my office and built TickerTrends late into the night. Sharing the work publicly brought thoughtful feedback and unexpected connections.</p>
            <p>Going full-time was only the beginning. We spent the next year and a half iterating with users, listening closely, and refining the product until we found a problem we could solve at scale. TickerTrends continues to evolve through that same cycle, with a clear objective: outwork incumbents and reset the standard for our industry.</p>
            <a className="text-link" href="https://www.thestockthoughts.com/p/a-conversation-with-adrien-navarre" target="_blank" rel="noopener noreferrer">Read the full conversation <Arrow /></a>
          </div>
        </section>

        <section className="education-section wrap" aria-labelledby="education-title">
          <h2 className="section-label" id="education-title">Education</h2>
          <div className="education-content">
            <ul className="education-schools">
              <li><span className="school-mark school-mark-hw" aria-hidden="true">HW</span><span>Harvard-Westlake</span></li>
              <li><span className="school-mark school-mark-gw" aria-hidden="true">GW</span><span>George Washington University</span></li>
              <li><span className="school-mark school-mark-smu" aria-hidden="true">SMU</span><span>Southern Methodist University</span></li>
            </ul>
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
