import React from 'react';
import './App.css';
import portrait from './images/adrien-navarre.png';
import tickertrendsLogo from './images/tickertrends.svg';
import anantakLogo from './images/anantak-logo.png';
import kilonovaLogo from './images/kilonova-logo.svg';

const Arrow = () => <span aria-hidden="true">↗</span>;
const Monogram = () => (
  <svg className="royal-monogram" viewBox="0 0 84 84" aria-hidden="true">
    <path className="monogram-flourish" d="M17 27C8 33 8 49 20 58M15 34c6 0 8-4 9-9M14 42c6-1 9-5 10-10M16 51c6-2 9-5 10-10M67 27c9 6 9 22-3 31M69 34c-6 0-8-4-9-9M70 42c-6-1-9-5-10-10M68 51c-6-2-9-5-10-10" />
    <path className="monogram-shield" d="M17 10h50v34c0 16-10 27-25 34-15-7-25-18-25-34V10z" />
    <path className="monogram-shield monogram-shield-inner" d="M22 15h40v28c0 13-8 22-20 29-12-7-20-16-20-29V15z" />
    <path className="monogram-divider" d="M27 53h30M31 57h22" />
    <path className="monogram-top-ornament" d="M31 20h22M36 17h12" />
    <text className="monogram-initials" x="42" y="48" textAnchor="middle">AN</text>
  </svg>
);

const PortraitOrnament = () => (
  <svg className="portrait-ornament" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <path d="M2 20V2h18M6 17V6h11M2 11c5 0 9-4 9-9M98 20V2H80M94 17V6H83M98 11c-5 0-9-4-9-9M2 80v18h18M6 83v11h11M2 89c5 0 9 4 9 9M98 80v18H80M94 83v11H83M98 89c-5 0-9 4-9 9" />
    <circle cx="11" cy="11" r="1.25" /><circle cx="89" cy="11" r="1.25" /><circle cx="11" cy="89" r="1.25" /><circle cx="89" cy="89" r="1.25" />
  </svg>
);

const BlackSwan = () => (
  <svg className="black-swan" viewBox="0 0 640 520" role="img" aria-labelledby="black-swan-title black-swan-description">
    <title id="black-swan-title">An engraved black swan</title>
    <desc id="black-swan-description">A black swan rendered in antique engraved linework within an ornamental frame.</desc>
    <rect className="swan-frame swan-frame-outer" x="15" y="15" width="610" height="490" />
    <rect className="swan-frame swan-frame-inner" x="27" y="27" width="586" height="466" />
    <path className="swan-ornament" d="M45 92V45h47M55 78V55h23M595 92V45h-47M585 78V55h-23M45 428v47h47M55 442v23h23M595 428v47h-47M585 442v23h-23" />
    <path className="swan-ornament swan-ornament-fine" d="M44 67c14 0 23-9 23-23M596 67c-14 0-23-9-23-23M44 453c14 0 23 9 23 23M596 453c-14 0-23 9-23 23" />
    <circle className="swan-rosette" cx="45" cy="45" r="3" /><circle className="swan-rosette" cx="595" cy="45" r="3" /><circle className="swan-rosette" cx="45" cy="475" r="3" /><circle className="swan-rosette" cx="595" cy="475" r="3" />
    <path className="swan-water" d="M93 411c50-15 92-15 143 0 51 15 98 14 145-1 47-15 101-15 166 1M119 434c42-10 82-9 122 2 49 13 94 12 135-2 41-13 86-14 136-2" />
    <path className="swan-body" d="M142 362c25-53 77-82 145-78 38 2 76 15 110 39 26 18 60 24 100 16-14 35-42 61-84 76-59 21-135 20-204-4-40-14-62-31-67-49z" />
    <path className="swan-neck" d="M391 337c-25-31-39-65-40-101-2-56 35-84 62-116 18-21 26-45 17-69" />
    <path className="swan-neck-highlight" d="M381 326c-18-28-27-57-25-88 3-49 36-75 61-106 16-20 22-41 15-63" />
    <path className="swan-head" d="M409 68c-3-26 17-46 41-42 22 3 35 25 28 46-7 22-31 32-51 21-9-5-15-14-18-25z" />
    <path className="swan-beak" d="M474 54l53 17-48 14c4-10 3-21-5-31z" />
    <circle className="swan-eye" cx="454" cy="54" r="4" />
    <path className="swan-wing" d="M206 352c40-52 100-65 168-25-27 7-45 22-55 43 30-10 57-7 82 8-56 35-132 39-195-26z" />
    <path className="swan-feather" d="M227 349c35-32 76-38 124-18M219 359c42-17 80-17 115 0M232 374c42-11 82-8 119 8M259 338c-7 20-5 39 5 57M291 329c-4 20 0 41 13 62M324 331c4 16 14 31 31 45M182 367c16 21 38 35 67 43M164 376c10 14 25 26 45 35" />
    <path className="swan-hatching" d="M410 119l20 9M397 136l21 10M383 154l20 10M370 174l20 9M361 196l18 7M357 221l17 6M360 247l17 5M366 273l18 4M376 299l18 3" />
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
              <PortraitOrnament />
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
            <p>That also affects the kinds of problems we choose to work on. We will often test questions that look extremely difficult, or maybe even impossible, because the way we approach those problems is part of what gives us an advantage. The willingness to enter areas others dismiss, learn from them quickly, and keep going compounds over time.</p>
            <a className="text-link" href="https://www.thestockthoughts.com/p/a-conversation-with-adrien-navarre" target="_blank" rel="noopener noreferrer">Read the full conversation <Arrow /></a>
          </div>
        </section>

        <section className="principle-section wrap" aria-labelledby="principle-title">
          <div className="principle-art"><BlackSwan /></div>
          <div className="principle-copy">
            <p className="section-label">Favorite book / Operating principle</p>
            <h2 id="principle-title">Built for the unexpected.</h2>
            <p><cite>Antifragile</cite> is probably my favorite book. Its ideas around Black Swans and systems that benefit from volatility have had a large influence on how I build companies.</p>
            <p>I try to avoid decisions where one unexpected event can permanently damage the business, while preserving enough flexibility that new information or a shift in the market can become an opportunity.</p>
            <p className="book-credit">Nassim Nicholas Taleb · 2012</p>
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
