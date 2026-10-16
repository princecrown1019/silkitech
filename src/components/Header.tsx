'use client';
import { useEffect, useState } from 'react';
import { LogoMark } from '@/components/LogoMark';

const links = [
  {href:'#work',label:'Work'},
  {href:'#studio',label:'Studio'},
  {href:'#plan',label:'Process'},
];

export function Header() {
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
    <div className="shell nav-shell">
      <a href="#top" className="brand" aria-label="SilkiTech homepage">
        <LogoMark size={28}/>
        <span>SILKITECH</span>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {links.map(item => <a key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</a>)}
        <a className="mobile-contact" href="#contact" onClick={()=>setOpen(false)}>Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">Contact</a>
      <button
        className={open ? 'menu-toggle is-open' : 'menu-toggle'}
        onClick={()=>setOpen(v=>!v)}
        aria-label={open?'Close menu':'Open menu'}
        aria-expanded={open}
      >
        <span className="burger"/>
      </button>
    </div>
  </header>;
}
