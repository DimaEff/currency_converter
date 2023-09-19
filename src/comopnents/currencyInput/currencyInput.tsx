import { Stack, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import MCurrencyInput from 'react-currency-input-field';

import { CurrencySelect, CurrencySelectProps } from '../currencySelect';

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
        decimalScale={2}
      />
      <CurrencySelect {...currencySelectProps} />
    </Stack>
  );
};
