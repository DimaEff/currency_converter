export type Currency = string;
export type CurrencyDescription = string;
export type Amount = string;

export type CurrenciesWithDescriptions = Record<Currency, CurrencyDescription>;

export interface ConverteParams {
  from: Currency;
  to: Currency;
  amount: Amount;
}

export type ConverteResult = number;
