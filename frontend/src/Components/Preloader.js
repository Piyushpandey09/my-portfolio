import React, { useEffect, useState } from "react";
import "../Style/Preloader.css";

const Preloader = () => {
  const [scanned, setScanned] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    // Step 1: Scan for 3 sec
    const timer1 = setTimeout(() => {
      setScanned(true);
    }, 3000);

    // Step 2: Show check after scan
    const timer2 = setTimeout(() => {
      setShowCheck(true);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="preloader">
      {!showCheck ? (
        <div className={`fingerprint ${scanned ? "fade-out" : ""}`}>
          <div className="fingerprint-scan"></div>
        </div>
      ) : (
        <div className="success-check">
          <svg viewBox="0 0 52 52" className="checkmark">
            <path
              className="checkmark__circle"
              d="M26 2c13.255 0 24 10.745 24 24S39.255 50 26 50 2 39.255 2 26 12.745 2 26 2z"
            />
            <path className="checkmark__check" d="M14 27l7 7 16-16" />
          </svg>
        </div>
      )}

      <p className={`loading-text ${showCheck ? "granted" : ""}`}>
        {!showCheck ? "Authenticating..." : "Access Granted"}
      </p>
    </div>
  );
};

export default Preloader;
