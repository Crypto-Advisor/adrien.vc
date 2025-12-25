import React, { useState, useEffect } from 'react';
import './App.css';
import ThreeJsPanel from './ThreeJsPanel';

function TickerItem({ text, delay = 0 }) {
  return (
    <span className="ticker-item" style={{ animationDelay: `${delay}s` }}>
      {text}
    </span>
  );
}

function ProgressBar({ label, value, color }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="progress-container">
      <div className="progress-label">{label}</div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${width}%`, backgroundColor: color }}
        ></div>
        <span className="progress-value">{value}%</span>
      </div>
    </div>
  );
}

function App() {
  const [time, setTime] = useState(new Date());
  const [activePanel, setActivePanel] = useState(null);
  const [dataPoints, setDataPoints] = useState([
    { value: 12.5, trend: 'up' },
    { value: 8.3, trend: 'down' },
    { value: 15.7, trend: 'up' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => prev.map(point => ({
        value: Math.max(0, Math.min(20, point.value + (Math.random() - 0.5) * 2)),
        trend: Math.random() > 0.5 ? 'up' : 'down'
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    'Java', 'C', 'C++', 'Typescript', 'React', 'Express',
    'Mongo', 'PostgreSQL', 'NodeJs', 'Flutter', 'Dart',
    'Python', 'Rust', 'Solidity', 'Golang', 'PHP',
    'Django', 'Flask', 'BASH', 'Docker'
  ];

  const experience = [
    { role: 'CEO & Founder', domain: 'TickerTrends', status: 'ACTIVE', level: 95 },
    { role: 'Project Manager', domain: 'Anantak Robotics', status: 'COMPLETE', level: 90 },
    { role: 'Robotics Engineer', domain: 'Anantak Robotics', status: 'COMPLETE', level: 88 },
    { role: 'Analyst', domain: 'Kilonova Ventures', status: 'COMPLETE', level: 85 }
  ];

  const tickerItems = [
    'PORTFOLIO ACTIVE', 'SYSTEMS ONLINE', 'EXPERTISE: QUANTITATIVE FINANCE',
    'FULL-STACK DEVELOPMENT', 'ROBOTICS AUTOMATION', 'ALTERNATIVE DATA'
  ];

  return (
    <div className="App">
      <div className="navarre-terminal">
        {/* Animated Ticker Bar */}
        <div className="ticker-bar">
          <div className="ticker-content">
            {tickerItems.map((item, idx) => (
              <TickerItem key={idx} text={item} delay={idx * 0.5} />
            ))}
            {tickerItems.map((item, idx) => (
              <TickerItem key={`dup-${idx}`} text={item} delay={idx * 0.5} />
            ))}
          </div>
        </div>

        {/* Top Status Bar */}
        <div className="status-bar">
          <div className="status-left">
            <span className="terminal-logo">NAVARRE</span>
            <span className="separator">|</span>
            <span className="user-id">ADRIEN.VC</span>
            <span className="separator">|</span>
            <span className="session-status">
              <span className="pulse-dot"></span>SESSION ACTIVE
            </span>
          </div>
          <div className="status-right">
            <div className="live-data">
              {dataPoints.map((point, idx) => (
                <span key={idx} className={`data-point ${point.trend}`}>
                  {point.value.toFixed(1)} {point.trend === 'up' ? '▲' : '▼'}
                </span>
              ))}
            </div>
            <span className="separator">|</span>
            <span className="time">{time.toLocaleTimeString('en-US', { hour12: false })}</span>
            <span className="separator">|</span>
            <span className="date">{time.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase()}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="terminal-grid">
          {/* Three.js Visualization Panel - Top Left */}
          <div 
            className={`panel panel-threejs ${activePanel === 'threejs' ? 'panel-active' : ''}`}
            onMouseEnter={() => setActivePanel('threejs')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="panel-header">
              <span className="panel-title">
                <span className="icon">◆</span> NEURAL VISUALIZATION
              </span>
              <span className="panel-code">3D</span>
            </div>
            <div className="panel-content panel-content-threejs">
              <ThreeJsPanel />
            </div>
          </div>

          {/* Left Panel - Profile */}
          <div 
            className={`panel panel-profile ${activePanel === 'profile' ? 'panel-active' : ''}`}
            onMouseEnter={() => setActivePanel('profile')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="panel-header">
              <span className="panel-title">
                <span className="icon">◆</span> PROFILE
              </span>
              <span className="panel-code">DES</span>
            </div>
            <div className="panel-content">
              <div className="profile-section fade-in">
                <div className="field-row">
                  <span className="field-label">NAME</span>
                  <span className="field-value glow-text">ADRIEN NAVARRE</span>
                </div>
                <div className="field-row">
                  <span className="field-label">CONTACT</span>
                  <span className="field-value email">
                    <a href="mailto:adrien@tickertrends.io" className="animated-link">
                      adrien@tickertrends.io
                    </a>
                  </span>
                </div>
                <div className="field-row">
                  <span className="field-label">STATUS</span>
                  <span className="field-value status-active">
                    <span className="status-dot"></span> AVAILABLE
                  </span>
                </div>
              </div>

              <div className="profile-section fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="section-header">
                  <span className="header-line"></span>DESCRIPTION
                </div>
                <div className="description-text">
                  CEO & Founder of TickerTrends, serving retail and institutional clients managing $30B+ in assets. 
                  Experienced in quantitative finance, full-stack software development, and robotics automation. 
                  Leading a talented team building alternative data solutions for the financial industry.
                </div>
              </div>

              <div className="profile-section fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="section-header">
                  <span className="header-line"></span>PROFICIENCY
                </div>
                <ProgressBar label="Quantitative Finance" value={95} color="#FF8C00" />
                <ProgressBar label="Full Stack Development" value={93} color="#4a9eff" />
                <ProgressBar label="Robotics" value={88} color="#00ff00" />
              </div>

              <div className="profile-section fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="section-header">
                  <span className="header-line"></span>LINKS
                </div>
                <div className="field-row link-row">
                  <span className="field-label">GITHUB</span>
                  <span className="field-value">
                    <a href="https://github.com/Crypto-Advisor" target="_blank" rel="noopener noreferrer" className="animated-link">
                      <span className="link-arrow">→</span> /Crypto-Advisor
                    </a>
                  </span>
                </div>
                <div className="field-row link-row">
                  <span className="field-label">LINKEDIN</span>
                  <span className="field-value">
                    <a href="https://www.linkedin.com/in/adriennav/" target="_blank" rel="noopener noreferrer" className="animated-link">
                      <span className="link-arrow">→</span> /in/adriennav
                    </a>
                  </span>
                </div>
                <div className="field-row link-row">
                  <span className="field-label">YOUTUBE</span>
                  <span className="field-value">
                    <a href="https://www.youtube.com/@adrien_nav" target="_blank" rel="noopener noreferrer" className="animated-link">
                      <span className="link-arrow">→</span> /@adrien_nav
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Top Panel - Experience */}
          <div 
            className={`panel panel-experience ${activePanel === 'experience' ? 'panel-active' : ''}`}
            onMouseEnter={() => setActivePanel('experience')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="panel-header">
              <span className="panel-title">
                <span className="icon">◆</span> EXPERIENCE SUMMARY
              </span>
              <span className="panel-code">EXP</span>
            </div>
            <div className="panel-content">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ROLE</th>
                    <th>DOMAIN</th>
                    <th>STATUS</th>
                    <th>LEVEL</th>
                  </tr>
                </thead>
                <tbody>
                  {experience.map((exp, idx) => (
                    <tr key={idx} className="table-row-animated" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <td className="role-cell">{exp.role}</td>
                      <td>{exp.domain}</td>
                      <td className="status-cell">
                        <span className="status-indicator"></span> {exp.status}
                      </td>
                      <td>
                        <div className="mini-progress">
                          <div className="mini-fill" style={{ width: `${exp.level}%` }}></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Bottom Panel - Skills */}
          <div 
            className={`panel panel-skills ${activePanel === 'skills' ? 'panel-active' : ''}`}
            onMouseEnter={() => setActivePanel('skills')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="panel-header">
              <span className="panel-title">
                <span className="icon">◆</span> TECHNICAL SKILLS
              </span>
              <span className="panel-code">SKL</span>
            </div>
            <div className="panel-content">
              <div className="skills-container">
                {skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="skill-item"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <span className="skill-bullet">▸</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Command Bar */}
        <div className="command-bar">
          <div className="command-prompt">
            <span className="prompt-symbol blink">{'>'}</span>
            <span className="prompt-text">READY FOR INPUT</span>
          </div>
          <div className="command-hints">
            <button className="hint-button">F1:HELP</button>
            <button className="hint-button">F2:MENU</button>
            <button className="hint-button">F3:SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
