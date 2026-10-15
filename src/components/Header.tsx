'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoMark } from '@/components/LogoMark';

const links = [
  {href:'#services',label:'Services'},
  {href:'#about',label:'About'},
  {href:'#approach',label:'Approach'},
  {href:'#expertise',label:'Expertise'},
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
        <LogoMark/>
        <span>SILKITECH</span>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {links.map(item => <a key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</a>)}
        <a className="mobile-contact" href="mailto:info@silkitech.com">Contact</a>
      </nav>
      <a className="nav-cta" href="mailto:info@silkitech.com?subject=Let%27s%20talk%20about%20a%20project">Contact</a>
      <button className="menu-toggle" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>
        {open ? <X size={22}/> : <Menu size={22}/>}
      </button>
    </div>
  </header>;
}
