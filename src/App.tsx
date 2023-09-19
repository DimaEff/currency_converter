import './App.css';

import { useState } from 'react';

import { Amount, Currency } from './api/currency/types';
import { CurrencyInput } from './comopnents/currencyInput';

function App() {
  const [amountFrom, setAmountFrom] = useState<Amount>('0');
  const [currencyFrom, setCurrencyFrom] = useState<Currency | null>(null);

  return (
    <div style={{ padding: 50 }}>
      <CurrencyInput
        amountValue={amountFrom}
        onChangeAmount={setAmountFrom}
        currencySelectProps={{
          currencyValue: currencyFrom,
          onChangeCurrency: setCurrencyFrom,
        }}
      />
      <CurrencyInput
        amountValue={'0'}
        onChangeAmount={() => undefined}
        currencySelectProps={{
          currencyValue: 'RU',
          onChangeCurrency: () => undefined,
          disabled: true,
        }}
      />
    </div>
  );
}

export default App;
