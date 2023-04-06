import { useState } from 'react';
import styles from "../styles/Print.module.css"

const PrintCostCalculator: React.FC = () => {
  const [grams, setGrams] = useState<number | undefined>(undefined);
  const [cost, setCost] = useState<number>(0); // set cost to 0 by default

  const calculateCost = () => {
    if (grams !== undefined) {
      const printCost = grams * 0.25 + 10;
      setCost(printCost);
    } else {
      setCost(0); // set cost to 0 if grams is not set
    }
  };

  return (
    <div>
      <label htmlFor="grams" className={styles.formlabel}>AMOUNT OF GRAMS</label>
      <div className="d-flex justify-content-center align-items-center">
        <div className={`${styles.price} align-items-center justify-content-center`}>
          {cost.toLocaleString(undefined, { style: 'currency', currency: 'AUD' })}
        </div>
        <input type="number" className={`${styles.grams}`} id="grams" value={grams ?? ''} onChange={(e) => setGrams(parseInt(e.target.value, 10))} />
      </div>
      <button onClick={calculateCost} className={styles.check}>CHECK PRICE</button>
      <div className="d-flex">
        not including postage and handling
      </div>
    </div>
  );
};
  
export default PrintCostCalculator;
