import Nav from "@/components/Nav";
import ProductCard, { Product } from "@/components/ProductCard";

const products: Product[] = [
  { sku: "YM-1001", name: "Ceremonial Matcha", blurb: "First-flush Uji blend. Stone-milled.", moq: "10×1kg",
    tiers: [{label:"250g", price:"₹1,080 / unit"},{label:"1kg", price:"₹3,650 / unit"},{label:"10kg", price:"₹34,800 / case"}] },
  { sku: "YM-2002", name: "Barista Matcha", blurb: "Stable foam, vivid color for lattes.", moq: "20×1kg",
    tiers: [{label:"250g", price:"₹740 / unit"},{label:"1kg", price:"₹2,540 / unit"},{label:"10kg", price:"₹24,200 / case"}] },
  { sku: "YM-3003", name: "Culinary Matcha", blurb: "Baking & gelato applications.", moq: "10×5kg",
    tiers: [{label:"1kg", price:"₹1,280 / unit"},{label:"5kg", price:"₹5,900 / unit"},{label:"10kg", price:"₹11,200 / case"}] }
];

export default function Catalog(){
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-[1200px] px-6 pt-28 pb-16">
        <h1 className="font-serif text-4xl text-gyokuro">Catalog</h1>
        <p className="text-black/70 mt-2">Wholesale SKUs with clear pack sizes, MOQs and tiered pricing.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p.sku} product={p} />)}
        </div>
      </section>
    </main>
  )
}
