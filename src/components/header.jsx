import React from 'react';

export default function Header({ onNavClick, sections, currentSection }) {
  return (
    <header style={{ background: 'linear-gradient(90deg,#1a365d 60%,#318ce 100%)', color: 'white', padding: '3rem 1.5rem 2rem' }}>
      <nav style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'right' }}>
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onNavClick(id)}
            style={{
              color: currentSection === id ? '#0e3aa7' : 'white',
              background: 'transparent',
              border: 'none',
              marginLeft: 20,
              fontWeight: 600,
              textTransform: 'uppercase',
              fontSize: 14,
              borderBottom: currentSection === id ? '3px solid #fff' : 'none',
              paddingBottom: 6,
              cursor: 'pointer',
            }}
            aria-current={currentSection === id ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </nav>
      <h1 style={{ fontWeight: 900, fontSize: '3rem', margin: '0.5rem 0 1rem' }}>
        Vantage Brilliance Group
      </h1>
      <p style={{ fontWeight: 600, fontSize: '1.3rem', maxWidth: 640, margin: 'auto' }}>
        Partnering with visionary HealthTech leaders to drive strategy, innovation, and sustainable growth.
      </p>
    </header>
  );
}
