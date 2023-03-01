import React from "react";

export default function networkLevel({ firstLogin }: { firstLogin: number}) {
    const firstLoginEpochTime = firstLogin;
    const firstLoginDate = new Date(firstLoginEpochTime);
    const res = firstLoginDate.toLocaleDateString();
    
    return <h4 className="skeleton-text">{res}</h4>
  }