import { LoadingButton } from '@mui/lab';
import { Card, CardContent, FormHelperText, Stack } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { object, string } from 'yup';

import { fetchConvert } from '../../api/currency';
import { Amount, Currency } from '../../api/currency/types';
import { CurrencyInput } from '../currencyInput';

const CURRENCY_VALUE_TO = 'RUB';

const schema = object({
  amount: string().required(),
  currencyFrom: string().required(),
});

export const ConverteCurrencyForm = () => {
  const [amount, setAmount] = useState<Amount | undefined>(undefined);
  const [currencyFrom, setCurrencyFrom] = useState<Currency | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleConverte = async () => {
    try {
      await schema.validate({ amount, currencyFrom });
      setErrorMessage(null);
      return await fetchConvert({
        from: currencyFrom!,
        to: CURRENCY_VALUE_TO,
        amount: amount!,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };
  const { refetch, isFetching, data } = useQuery(fetchConvert.name, handleConverte, {
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <CurrencyInput
            amountValue={amount}
            onChangeAmount={setAmount}
            currencySelectProps={{
              currencyValue: currencyFrom,
              onChangeCurrency: setCurrencyFrom,
            }}
          />
          <CurrencyInput
            amountValue={data?.toString() ?? undefined}
            readOnly
            currencySelectProps={{
              currencyValue: CURRENCY_VALUE_TO,
              disabled: true,
            }}
          />
          <LoadingButton loading={isFetching} onClick={() => refetch()}>
            Convert
          </LoadingButton>
          {errorMessage !== null && (
            <FormHelperText sx={{ color: 'error.main' }}>{errorMessage}</FormHelperText>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
