import { useState } from "react"
import { useEffect } from "react";
// import CurrencyContext from "./CurrencyContext";
import Context from "./Context";
import { useContext } from "react";


function CurrencySelection() {
    const[currencies,setCurrencies] = useState([]);
    // const [currency,setCurrency] = useState('CZK')
    const [exchangeRate,setExchangeRate] = useState(1)
    // const { currency, setCurrency } = useContext(CurrencyContext)
    const { state:{currency}, dispatch } = useContext(Context);



    const loadcurrency =async()=>{
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php')
        const data = await response.json()
        setCurrencies(data)
   }

   const loadExchangeRates =async()=>{
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency='+currency)
    const data = await response.json()
    setExchangeRate(data.rate)
}



   const handleSelect = (event) => {
    // setCurrency(event.target.value);
    dispatch({
        type: 'currency/set',
        payload: event.target.value
    })
   }


   useEffect(() => {
    loadcurrency();
    
    },[]);

    useEffect(() => {
        loadExchangeRates();
     },[currency]);

  
  return (
    <>
    <select name="" value={currency} onChange={handleSelect}>
        {
            currencies.map(code=>{
                return(
                    <>
                <option key={code} value={code}>{code}</option>
                </>
                    
                )
            })
        }  
    </select>

     <div>{exchangeRate}</div>
     </>
  )
}

export default CurrencySelection