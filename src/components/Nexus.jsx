import React from 'react';

const features = [
  { title: 'Health Diagnosis', desc: 'Discover your business health and uncover your bottleneck quickly.' },
  { title: 'Operational Review', desc: 'Run weekly reviews that connect actions to quarterly goals.' },
  { title: 'Strategic Simulator', desc: 'Test pricing moves, staffing, and market strategy outcomes.' },
];

export default function Nexus({ id }) {
  return (
    <section id={id} style={{ marginTop: 60 }}>
      <h2>Introducing Vantage Nexus</h2>
      <p>The flagship decision engine that reduces guesswork and accelerates growth.</p>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', maxWidth: 820, margin: '2rem auto' }}>
        {features.map(({ title, desc }) => (
          <div key={title} style={{ flex: '1 1 270px', background: 'white', padding: '1.7rem', borderRadius: '14px', boxShadow: '0 6px 30px rgba(80,100,150,0.14)' }}>
            <h3 style={{ color: '#139d87', marginBottom: '.75em' }}>{title}</h3>
            <p style={{ color: '#446176', fontWeight: 600 }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="https://app.vantagebrilliance.com" style={{ fontWeight: 700, padding: '1.1rem 2.3rem', backgroundColor: '#139d87', color: 'white', borderRadius: '50px', textDecoration: 'none' }}>
          Try Vantage Nexus
        </a>
      </div>
    </section>
  );
}
