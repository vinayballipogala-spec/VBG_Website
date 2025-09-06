import React from 'react';

const sectors = [
  'Clinical Data & Analytics Platforms',
  'Remote Patient Monitoring & IoT Health',
  'Digital Therapeutics & Behavioral Health Apps',
  'Healthcare Revenue Cycle & FinTech',
  'EHR and EMR / Practice Management',
  'Pharma Tech & Market Access',
  'Medical Device SaaS & Connectivity',
  'AI-Powered Diagnostics & Imaging',
  'Patient Engagement Platforms',
  'Healthcare Data Security & Compliance',
  'Provider Marketplaces & Ecosystem',
  'Population and Public Health Technology',
];

export default function WhoServe({ id }) {
  return (
    <section id={id} style={{ marginTop: 60, backgroundColor: '#e6faf8', padding: '2rem', borderRadius: '12px' }}>
      <h2>Who We Serve</h2>
      <p>If you work in any of these HealthTech sectors, Vantage Brilliance Group is here to accelerate your journey:</p>
      <ul style={{ columns: '2', gap: '1rem', fontWeight: 600, maxWidth: 800, margin: '1rem auto' }}>
        {sectors.map((sector) => (
          <li key={sector}>{sector}</li>
        ))}
      </ul>
      <p style={{ maxWidth: 800, margin: 'auto' }}>
        Not sure if you fit? <a href="#contact">Contact us</a> for a conversation.
      </p>
    </section>
  );
}
