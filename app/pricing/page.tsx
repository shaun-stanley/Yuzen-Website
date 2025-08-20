import Nav from "@/components/Nav";
import PricingTable from "@/components/PricingTable";

export default function Pricing(){
  const rows = [
    { qty:"10–24", unit:"1kg", unitPrice:"₹3,650", margin:"52%", leadTime:"3–5 days" },
    { qty:"25–99", unit:"1kg", unitPrice:"₹3,280", margin:"56%", leadTime:"5–7 days" },
    { qty:"100+", unit:"1kg", unitPrice:"₹2,980", margin:"60%", leadTime:"10–14 days" }
  ];
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-[1200px] px-6 md:px-8 pt-40 pb-32">
        <h1 className="font-serif text-4xl text-gyokuro">Pricing & MOQ</h1>
        <p className="text-black/70 mt-2">Transparent tiers and lead times. Replace with your own data.</p>
        <div className="mt-8">
          <PricingTable rows={rows} />
        </div>
      </section>
    </main>
  )
}
