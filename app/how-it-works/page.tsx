import Nav from "@/components/Nav";

export default function HowItWorks(){
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-[1200px] px-6 md:px-8 pt-40 pb-32">
        <h1 className="font-serif text-4xl text-gyokuro">How it works</h1>
        <ol className="mt-6 space-y-4 text-black/80">
          <li><strong>Request access</strong> — Tell us about your business for wholesale pricing.</li>
          <li><strong>Get approved</strong> — We verify and unlock your full price list & terms.</li>
          <li><strong>Order fast</strong> — Quick reorders, saved lists, and CSV upload.</li>
        </ol>
      </section>
    </main>
  )
}
