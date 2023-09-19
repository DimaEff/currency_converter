import { Stack, TextField } from '@mui/material';
import { FC } from 'react';

import { Amount } from '../../api/currency/types';
import { CurrencySelect, CurrencySelectProps } from '../currencySelect';

interface CurrencyInputProps {
  amountValue: Amount;
  onChangeAmount: (a: Amount) => void;
  currencySelectProps: CurrencySelectProps;
}

export const CurrencyInput: FC<CurrencyInputProps> = ({
  amountValue,
  onChangeAmount,
  currencySelectProps,
}) => {
  return (
    <Stack direction={'row'} spacing={1} sx={{ width: '100%' }}>
      <TextField value={amountValue} onChange={(e) => onChangeAmount(e.target.value)} />
      <CurrencySelect {...currencySelectProps} />
    </Stack>
  );
};
