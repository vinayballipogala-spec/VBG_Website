import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import WhoServe from './components/WhoServe';
import Nexus from './components/Nexus';
import Playbooks from './components/Playbooks';
import Founder from './components/Founder';
import Contact from './components/Contact';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'who-serve', label: 'Who We Serve' },
  { id: 'nexus', label: 'Nexus' },
  { id: 'playbooks', label: 'Playbooks' },
  { id: 'founder', label: 'Founder' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [currentSection, setCurrentSection] = useState('about');

  const onNavClick = (id) => {
    setCurrentSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header onNavClick={onNavClick} sections={SECTIONS} currentSection={currentSection} />
      <main>
        <About id="about" />
        <WhoServe id="who-serve" />
        <Nexus id="nexus" />
        <Playbooks id="playbooks" />
        <Founder id="founder" />
        <Contact id="contact" />
      </main>
    </>
  );
}
