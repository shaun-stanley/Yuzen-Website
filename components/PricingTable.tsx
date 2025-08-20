type Row = { qty: string; unit: string; unitPrice: string; margin: string; leadTime: string };

export default function PricingTable({ rows }: { rows: Row[] }){
  return (
    <div className="glass overflow-x-auto rounded-2xl">
      <table className="w-full text-sm">
        <thead className="bg-mist/60 backdrop-blur">
          <tr className="[&>th]:text-left [&>th]:py-3 [&>th]:px-4">
            <th>Qty Break</th><th className="text-right">Unit</th><th className="text-right">Unit Price</th><th className="text-right">Est. Margin</th><th>Lead Time</th>
          </tr>
        </thead>
        <tbody className="[&>tr]:border-t [&>tr]:border-black/5">
          {rows.map((r, i)=> (
            <tr key={i} className="[&>td]:py-3 [&>td]:px-4">
              <td>{r.qty}</td>
              <td className="text-right">{r.unit}</td>
              <td className="text-right">{r.unitPrice}</td>
              <td className="text-right">{r.margin}</td>
              <td>{r.leadTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
