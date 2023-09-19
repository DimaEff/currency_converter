import { Stack, TextField, TextFieldProps } from '@mui/material';
import { FC, useState } from 'react';
import MCurrencyInput from 'react-currency-input-field';

import { Amount } from '../../api/currency/types';
import { CurrencySelect, CurrencySelectProps } from '../currencySelect';

// const NUMERIC_PATTERN = /^[0-9]*$/;
// const NUMERIC_PATTERN = /([0-9\,\.]+)/;

interface CurrencyInputProps {
  amountValue: string | undefined;
  onChangeAmount?: (a: string) => void;
  readOnly?: boolean;
  currencySelectProps: CurrencySelectProps;
}

export const CurrencyInput: FC<CurrencyInputProps & TextFieldProps> = ({
  amountValue,
  onChangeAmount,
  readOnly,
  currencySelectProps,
}) => {
  return (
    <Stack direction={'row'} spacing={1} sx={{ width: '100%' }}>
      <MCurrencyInput
        value={amountValue}
        onValueChange={(v) => onChangeAmount?.(v ?? '0')}
        allowNegativeValue={false}
        readOnly={readOnly}
      />
      <CurrencySelect {...currencySelectProps} />
    </Stack>
  );
};
