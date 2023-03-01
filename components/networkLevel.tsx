import React from "react";

export default function networkLevel({ networkExp }: { networkExp: number }) {
    const BASE = 10_000;
    const GROWTH = 2_500;
    
    const REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH;
    const REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX;
    const GROWTH_DIVIDES_2 = 2 / GROWTH;
    
    function calculate(exp: number) {
        return exp < 0 ? 1 : Math.floor(1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp));
    }
  
    const networkLevel = calculate(networkExp)
    return <h4 className="skeleton-text">{networkLevel}</h4>
  }