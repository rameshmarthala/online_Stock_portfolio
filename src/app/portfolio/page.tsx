// src/app/portfolio/page.tsx
import fs from 'fs';
import path from 'path';
export default function Portfolio() {
  const filePath = path.join(process.cwd(), 'src/data/investments.json'); // Updated file path
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const stocks = JSON.parse(jsonData);
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-700" style={{textAlign:"center",color:"green"}}>
        My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
      style={{alignContent:"center",alignItems:"center", display:"flex",flexWrap:"wrap"}}>
        {stocks.map((stock: any) => (
          <div key={stock.symbol} style={{width:"200px",height:"max-content", gap:"15px",textAlign:"center"}}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{stock.name}</h2>
            <p className="text-gray-600"><strong>Symbol:</strong> {stock.symbol}</p>
            <p className="text-gray-600"><strong>Price:</strong> ${stock.price.toFixed(2)}</p>
            <p className={`text-gray-600 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              <strong>Change:</strong> {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
            </p>
            <p className={`text-gray-600 ${stock.percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              <strong>Percent Change:</strong> {stock.percentChange >= 0 ? '+' : ''}{stock.percentChange.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
