import React from 'react';

const playbooks = [
  { title: 'Margin Velocity Framework', desc: 'Optimize product-level profitability step-by-step.' },
  { title: 'Time-to-Revenue Compression', desc: 'Shorten CAC payback with fast sales and onboarding.' },
  { title: 'Customer Momentum', desc: 'Reduce churn and accelerate expansion.' },
  { title: 'Productivity Sprint', desc: 'Ramp new hires quickly to full productivity.' },
];

export default function Playbooks({ id }) {
  return (
    <section id={id} style={{ marginTop: 60 }}>
      <h2>Strategic Playbooks</h2>
      <p>Battle-tested frameworks to power your growth and operational success.</p>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', maxWidth: 900, margin: '2rem auto' }}>
        {playbooks.map(({ title, desc }) => (
          <div key={title} style={{ flex: '1 1 260px', background: 'white', padding: '1.8rem', borderRadius: '14px', boxShadow: '0 6px 30px rgba(80,100,150,0.14)' }}>
            <h3 style={{ color: '#139d87' }}>{title}</h3>
            <p style={{ color: '#446176', fontWeight: 600 }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
