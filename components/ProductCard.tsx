type Tier = { label: string; price: string };
export type Product = {
  sku: string;
  name: string;
  blurb: string;
  moq: string;
  tiers: Tier[];
};

export default function ProductCard({ product }: { product: Product }){
  return (
    <article className="rounded-2xl glass p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <h3 className="font-medium">{product.name} | SKU {product.sku}</h3>
        <span className="text-[11px] rounded-full px-2 py-1 bg-mist/80">MOQ {product.moq}</span>
      </div>
      <p className="mt-1 text-sm text-black/70">{product.blurb}</p>
      <dl className="mt-3 grid grid-cols-3 gap-3 text-[13px]">
        {product.tiers.map((t,i)=>(
          <div key={i}><dt className="text-black/50">{t.label}</dt><dd>{t.price}</dd></div>
        ))}
      </dl>
      <div className="mt-4 flex gap-3">
        <button className="px-3 py-2 rounded-lg border border-black/10 bg-white/60 backdrop-blur-sm focus-ring">Add to Quote</button>
        <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-ceremonial to-gyokuro text-white focus-ring">Quick Add</button>
      </div>
    </article>
  )
}
