import React from 'react';
import { useState, useEffect } from 'react';
import { useBitcoinPrice } from './useBitcoinPrice';
import { useMood } from './useMood'; // Import the useMood hook
const currencies = ['usd', 'aud', 'nzd', 'gbp', 'eur', 'sgd'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const { mood } = useMood(); // Get the current mood using the useMood hook

  useEffect(() => {
    // Define the API URL with the selected currency
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

    // Fetch Bitcoin price data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract the Bitcoin price from the API response
        const price = data.bitcoin && data.bitcoin[currency];
        setBitcoinPrice(price);
      })
      .catch((error) => {
        console.error('Error fetching Bitcoin price:', error);
        setBitcoinPrice(null);
      });
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {bitcoinPrice !== null ? (
        <p>
          Current Bitcoin Price in {currency}: {bitcoinPrice} {currency}
        </p>
      ) : (
        <p>Loading...</p>
      )}
      <p>Current Mood: {mood}</p> {/* Display the current mood */}
    </div>
  );
}

export default BitcoinRates;
