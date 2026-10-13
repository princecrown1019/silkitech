'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [{href:'#services',label:'Services'},{href:'#about',label:'About'},{href:'#approach',label:'Our Approach'},{href:'#expertise',label:'Expertise'}];
export function Header() {
  const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="shell nav-shell">
    <a href="#top" className="brand" aria-label="SilkiTech homepage"><span className="brand-symbol" aria-hidden="true"><i/><i/><i/></span><span>silki<span className="brand-blue">tech</span><span className="brand-dot">.</span></span></a>
    <nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation">{links.map(item=><a key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</a>)}<a className="mobile-contact" href="mailto:info@silkitech.com">Contact us</a></nav>
    <a className="nav-cta" href="mailto:info@silkitech.com?subject=Let%27s%20talk%20about%20a%20project">Let's talk <ArrowUpRight size={16}/></a>
    <button className="menu-toggle" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X size={24}/>:<Menu size={24}/>}</button>
  </div></header>;
}
