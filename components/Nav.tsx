'use client';
import Link from 'next/link';
import type { Route } from 'next';
import { useEffect, useState } from 'react';

export default function Nav(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition backdrop-blur-md ${
        scrolled ? 'glass' : 'bg-gradient-to-b from-white/60 to-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl">Yūzen Matcha</Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link className="opacity-80 hover:opacity-100" href="/catalog">Catalog</Link>
          <Link className="opacity-80 hover:opacity-100" href="/pricing">Pricing</Link>
          <Link className="opacity-80 hover:opacity-100" href="/how-it-works">How it works</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link className="text-sm opacity-80 hover:opacity-100" href={'/signin' as Route}>Sign in</Link>
          <Link className="px-3 py-2 rounded-full bg-ceremonial text-white text-sm focus-ring" href={'/request-access' as Route}>Request access</Link>
        </div>
      </div>
    </header>
  )
}
