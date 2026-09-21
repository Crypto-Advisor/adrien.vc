import React from 'react';
import './App.css';
import portrait from './images/adrien-navarre.png';
import tickertrendsLogo from './images/tickertrends.svg';
import anantakLogo from './images/anantak-logo.png';
import kilonovaLogo from './images/kilonova-logo.svg';

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
              <p>Technical founder working across financial markets, software, and robotics.</p>
              <a className="text-link" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="work-section wrap" id="work" aria-labelledby="work-title">
          <div className="section-label"><span>01 / Current focus</span><span>From data to decisions</span></div>
          <div className="featured-work">
            <div className="work-story">
              <img className="company-mark" src={tickertrendsLogo} alt="" width="44" height="44" />
              <div>
                <p className="eyebrow">CEO & Founder</p>
                <h2 id="work-title">TickerTrends</h2>
                <p className="work-description">A clearer view of demand.<br />Before it becomes obvious.</p>
                <p className="supporting-copy">Alternative data helps anticipate what people and businesses will buy by analyzing how they interact with their devices. TickerTrends turns those patterns into decision-ready intelligence, with speed and coverage legacy providers cannot match.</p>
                <a className="text-link" href="https://tickertrends.io" target="_blank" rel="noopener noreferrer">Visit TickerTrends <Arrow /></a>
              </div>
            </div>
            <div className="work-proof">
              <div className="ranking"><span className="ranking-number">#2</span><p>Highest-traffic company in the category</p></div>
              <div className="ranking"><span className="ranking-number">#1</span><p>Largest social following in the category</p></div>
              <p className="organic-note">All grown through organic content.</p>
            </div>
          </div>
        </section>

        <section className="background-section wrap" id="background" aria-labelledby="background-title">
          <div className="background-intro">
            <p className="section-label">02 / Background</p>
            <h2 id="background-title">A background in finance.<br /><span>A foundation in engineering.</span></h2>
            <p>The advantage is the combination of disciplines: technical depth to build the systems, market knowledge to identify what matters, and managerial execution to turn both into a durable business. We run TickerTrends as a technology company serving finance, bringing engineering, market judgment, and management into one operating system instead of treating them as separate functions.</p>
            <div className="profile-location"><span>Location</span><p>Dallas, Texas &amp; Malibu, California</p></div>
          </div>
          <div className="experience-list">
            <article className="experience">
              <span className="experience-logo experience-logo--tickertrends"><img src={tickertrendsLogo} alt="" /></span>
              <div><h3>TickerTrends</h3><p>CEO & Founder</p></div>
              <span className="experience-status">Current</span>
            </article>
            <article className="experience">
              <span className="experience-logo experience-logo--anantak"><img src={anantakLogo} alt="" /></span>
              <div><h3>Anantak Robotics</h3><p>Project Manager · Robotics Engineer</p></div>
              <span className="experience-status">Previously</span>
            </article>
            <article className="experience">
              <span className="experience-logo experience-logo--kilonova"><img src={kilonovaLogo} alt="" /></span>
              <div><h3>Kilonova Ventures</h3><p>Analyst</p></div>
              <span className="experience-status">Previously</span>
            </article>
          </div>
        </section>

        <section className="story-section wrap" aria-labelledby="story-title">
          <h2 id="story-title">How I build companies</h2>
          <div className="story-copy">
            <p className="story-lede">When I was maybe 14 or 15, I started a YouTube channel about quantitative finance and automated trading strategies. I had pretty limited knowledge at the time, but almost no one was talking about those topics publicly. The channel grew to tens of thousands of subscribers, and it created a snowball effect where I kept going deeper into financial markets.</p>
            <p>Later, while I was studying computer science, I was also working full-time as a software engineer in robotics and machine learning. I would take classes in the morning, work at the robotics company, and then drive to my TickerTrends office around 6 or 7 p.m. and work until midnight or 1 a.m. It was a very extreme setup, but it was also clear to me that this was the company I wanted to build.</p>
            <p>Once I went full-time, it still took us about a year and a half to find the part of the business that could really scale. That period was mostly feedback and iteration. As more people used the software, we got better information about what they wanted, which ideas were working, and where we should direct our effort. We still operate that way today. The goal is to keep those cycles as fast as possible so that every improvement gives us information for the next one.</p>
            <p><cite>Antifragile</cite> is probably my favorite book. The ideas around Black Swans and building systems that benefit from volatility have had a large influence on how I think about companies. I try to avoid decisions where one unexpected event can permanently damage the business, while keeping enough flexibility that new information or a change in the market can become an opportunity for us.</p>
            <p>That also affects the kinds of problems we choose to work on. We will often test questions that look extremely difficult, or maybe even impossible, because the way we approach those problems is part of what gives us an advantage. The willingness to enter areas others dismiss, learn from them quickly, and keep going compounds over time.</p>
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
            <article><span className="practice-index">I.</span><h3>Markets & data</h3><p>Quantitative finance, alternative data, and the market context needed to separate useful signals from noise.</p><span className="stack">Python / PostgreSQL / MongoDB</span></article>
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
