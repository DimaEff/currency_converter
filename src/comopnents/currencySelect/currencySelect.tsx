import ErrorIcon from '@mui/icons-material/Error';
import {
  Autocomplete,
  AutocompleteProps,
  CircularProgress,
  TextField,
  Tooltip,
} from '@mui/material';
import { FC, useMemo } from 'react';
import { useQuery } from 'react-query';

import { fetchCurrencies } from '../../api/currency';
import { Currency } from '../../api/currency/types';

interface _CurrencySelectProps {
  currencyValue: Currency | null;
  onChangeCurrency?: (currency: Currency | null) => void;
}
type OptionalAutocompleteProps = Omit<
  AutocompleteProps<Currency, undefined, boolean, undefined>,
  'value' | 'options' | 'onChange' | 'renderInput' | 'disableClearable'
>;

export type CurrencySelectProps = _CurrencySelectProps & OptionalAutocompleteProps;

export const CurrencySelect: FC<CurrencySelectProps & OptionalAutocompleteProps> = ({
  currencyValue: value,
  onChangeCurrency: onChange,
  sx,
  ...props
}) => {
  const { isFetching, data, isFetched } = useQuery(fetchCurrencies.name, fetchCurrencies);
  const currenciesList = useMemo<Currency[] | null>(
    () => (data === null || data === undefined ? null : Object.keys(data)),
    [data],
  );

  if (currenciesList === null && isFetched) {
    return (
      <Tooltip title={'Some error'}>
        <ErrorIcon />
      </Tooltip>
    );
  }

  return (
    <Autocomplete<Currency, undefined, boolean, undefined>
      {...props}
      value={value}
      onChange={(_, v) => onChange?.(v)}
      options={currenciesList ?? []}
      disableClearable
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
            startAdornment: isFetching ? <CircularProgress /> : null,
          }}
        />
      )}
      sx={{
        width: 100,
        ...sx,
      }}
    />
  );
};
