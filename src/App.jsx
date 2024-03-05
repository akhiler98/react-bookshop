import { useState } from 'react'


import './App.scss'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

import CurrencyContext from './CurrencyContext'
import Context from './Context'
import reducer from './reducer'
import { useReducer } from 'react'

function App() {
  
  const [currentItem, setCurrentItem] = useState('');
  const [currency,setCurrency] = useState('CZK')
  const [state, dispatch] = useReducer(reducer, {
                                                      user: null,
                                                      theme: 'light',
                                                      language: 'en',
                                                      currency: 'USD',
                                                      authHash: null,
                                                      shoppingCart: []
                                                      // ...
                                                  });

  return (
    <>
    <Context.Provider value={{state, dispatch}}>

    <CurrencyContext.Provider value={{currency, setCurrency}}>
 
      <Header currentItem={ currentItem } setCurrentItem={ setCurrentItem } />
      <MainContent />
      <Footer />

    </CurrencyContext.Provider>

    </Context.Provider>
     
    </>
  )
}

export default App
