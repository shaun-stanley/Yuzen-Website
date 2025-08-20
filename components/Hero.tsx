import Link from 'next/link';
import type { Route } from 'next';

export default function Hero(){
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(11,107,58,.15),transparent),radial-gradient(circle_at_80%_80%,rgba(30,61,50,.12),transparent)]" />
      <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-2 items-center gap-16">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-gyokuro">Ceremonial-grade performance, at scale.</h1>
          <p className="mt-4 text-lg text-black/70 max-w-[48ch]">Matcha for cafes, hotels, and craft kitchens—sourced with precision, stone-milled with care.</p>
          <div className="mt-10 flex gap-4">
            <Link href={'/request-access' as Route} className="px-6 py-3 rounded-xl bg-gradient-to-r from-ceremonial to-gyokuro text-white shadow-soft">Request access</Link>
            <Link href="/catalog" className="px-6 py-3 rounded-xl border border-black/10 bg-white/70 backdrop-blur">View catalog</Link>
          </div>
          <ul className="mt-10 grid grid-cols-3 gap-8 text-sm text-black/70">
            <li><span className="block text-gyokuro font-medium">Stable supply</span>Year-round contracted lots.</li>
            <li><span className="block text-gyokuro font-medium">Effortless ordering</span>Quick reorders & CSV upload.</li>
            <li><span className="block text-gyokuro font-medium">Transparent pricing</span>Clear tiers & MOQs.</li>
          </ul>
        </div>
        <div className="rounded-3xl glass p-10">
          <h3 className="font-medium text-ink">Sample Kit</h3>
          <p className="text-sm text-black/70 mt-1">Assess our grades before committing. Ships in 48h.</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div><dt className="text-black/50">Includes</dt><dd>3×30g tins</dd></div>
            <div><dt className="text-black/50">MOQ</dt><dd>1 kit</dd></div>
            <div><dt className="text-black/50">Lead time</dt><dd>2–4 days</dd></div>
            <div><dt className="text-black/50">HS code</dt><dd>0902.10</dd></div>
          </dl>
          <a href="/samples" className="mt-8 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-ceremonial to-gyokuro text-white">Order sample kit</a>
        </div>
      </div>
    </section>
  )
}
