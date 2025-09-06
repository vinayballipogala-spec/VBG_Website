import React from 'react';

export default function Contact({ id }) {
  return (
    <section id={id} style={{ marginTop: 80, marginBottom: 40, textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <p>Ready to transform your HealthTech journey? Connect with us today.</p>
      <a href="mailto:contact@vantagebrilliance.com" style={{ backgroundColor: '#139d87', color: 'white', padding: '15px 32px', borderRadius: '50px', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block' }}>
        Email Vantage Brilliance
      </a>
      <br />
      <a href="https://app.vantagebrilliance.com" style={{ marginTop: '1rem', display: 'inline-block', color: '#317bd6' }}>
        Explore Vantage Nexus
      </a>
    </section>
  );
}
