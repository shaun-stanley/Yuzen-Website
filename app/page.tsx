import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductCard, { Product } from "@/components/ProductCard";
import PricingTable from "@/components/PricingTable";

const products: Product[] = [
  { sku: "YM-1001", name: "Ceremonial Matcha", blurb: "First-flush Uji blend. Stone-milled.", moq: "10×1kg",
    tiers: [{label:"250g", price:"₹1,080 / unit"},{label:"1kg", price:"₹3,650 / unit"},{label:"10kg", price:"₹34,800 / case"}] },
  { sku: "YM-2002", name: "Barista Matcha", blurb: "Stable foam, vivid color for lattes.", moq: "20×1kg",
    tiers: [{label:"250g", price:"₹740 / unit"},{label:"1kg", price:"₹2,540 / unit"},{label:"10kg", price:"₹24,200 / case"}] },
  { sku: "YM-3003", name: "Culinary Matcha", blurb: "Baking & gelato applications.", moq: "10×5kg",
    tiers: [{label:"1kg", price:"₹1,280 / unit"},{label:"5kg", price:"₹5,900 / unit"},{label:"10kg", price:"₹11,200 / case"}] }
];

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <section className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
        <h2 className="font-serif text-3xl text-gyokuro">Wholesale Catalog (preview)</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p.sku} product={p} />)}
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] px-6 md:px-8 py-24">
        <h2 className="font-serif text-3xl text-gyokuro">Pricing & MOQ</h2>
        <div className="mt-6">
          <PricingTable rows={[
            { qty:"10–24", unit:"1kg", unitPrice:"₹3,650", margin:"52%", leadTime:"3–5 days" },
            { qty:"25–99", unit:"1kg", unitPrice:"₹3,280", margin:"56%", leadTime:"5–7 days" },
            { qty:"100+", unit:"1kg", unitPrice:"₹2,980", margin:"60%", leadTime:"10–14 days" }
          ]} />
          <p className="text-xs text-black/60 mt-3">Values are placeholders—replace with your real price lists per segment/region.</p>
        </div>
      </section>
      <footer className="py-10 text-center text-sm text-black/60">© {new Date().getFullYear()} Yūzen Matcha</footer>
    </main>
  );
}
