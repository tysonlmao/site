import { useState } from 'react';

const PrintCostCalculator: React.FC = () => {
  const [grams, setGrams] = useState<number | undefined>(undefined);
  const [cost, setCost] = useState<number | undefined>(undefined);

  const calculateCost = () => {
    if (grams !== undefined) {
      const printCost = grams * 0.25;
      setCost(printCost);
    }
  };

  return (
    <div>
      <label htmlFor="grams">Enter the amount of grams:</label>
      <input type="number" id="grams" value={grams ?? ''} onChange={(e) => setGrams(parseInt(e.target.value, 10))} />

      <button onClick={calculateCost}>Calculate Cost</button>

      {cost !== undefined && (
        <div>
          The cost of the print is {cost.toLocaleString(undefined, { style: 'currency', currency: 'AUD' })}
        </div>
      )}
    </div>
  );
};

export default PrintCostCalculator;
