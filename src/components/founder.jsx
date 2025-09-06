import React from 'react';

export default function Founder({ id }) {
  return (
    <section id={id} style={{ marginTop: 60, maxWidth: 820, margin: '0 auto' }}>
      <h2>About the Founder</h2>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Vinay B" style={{ borderRadius: '50%', maxWidth: 150, boxShadow: '0 0 26px rgba(25,176,156,0.35)' }} />
        <div style={{ maxWidth: 600 }}>
          <h3>Vinay B, Founder & Principal</h3>
          <p>Vinay has deep experience leading teams in healthcare and SaaS environments, bringing unparalleled insights and execution rigor.</p>
          <ul>
            <li>Built commercial strategy teams at AstraZeneca</li>
            <li>Led government health initiatives in AP</li>
            <li>Scaled sales and marketing organizations across technology companies</li>
          </ul>
          <p>He founded Vantage Brilliance Group to unlock clarity and accelerate impactful growth for HealthTech innovators.</p>
        </div>
      </div>
    </section>
  );
}
