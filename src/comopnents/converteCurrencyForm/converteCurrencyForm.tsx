import { Card, CardContent, Stack, TextField } from '@mui/material';
import { useState } from 'react';

import { Amount, Currency } from '../../api/currency/types';
import { CurrencyInput } from '../currencyInput';

const CURRENCY_VALUE_TO = 'RU';

export const ConverteCurrencyForm = () => {
  const [amountFrom, setAmountFrom] = useState<Amount | undefined>(undefined);
  const [currencyFrom, setCurrencyFrom] = useState<Currency | null>(null);

  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <CurrencyInput
            amountValue={amountFrom}
            onChangeAmount={setAmountFrom}
            currencySelectProps={{
              currencyValue: currencyFrom,
              onChangeCurrency: setCurrencyFrom,
              disabled: true,
            }}
          />
          <CurrencyInput
            amountValue={undefined}
            readOnly
            currencySelectProps={{
              currencyValue: CURRENCY_VALUE_TO,
              disabled: true,
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};
