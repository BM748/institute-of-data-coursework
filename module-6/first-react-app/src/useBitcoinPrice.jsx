import { useEffect, useState } from "react";

export function useBitcoinPrice(selectedCurrency) {
    const [bitcoinPrice, setBitcoinPrice] = useState (null);

    useEffect(() => {
        const apiurl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}';
    
    
        fetch(apiurl)
        .then((response) => response.json())
        .then((data) =>{
        
            const price = data.bitcoin && data.bitcoin[selectedCurrency];
            setBitcoinPrice(price);

        })
        .catch ((error) =>{
            console.error('Error fetching Bitcoin Price:', error);
            setBitcoinPrice(null);
        });
        }, [selectedCurrency]);

        return bitcoinPrice;
    }
    
    