import axios from 'axios';

import { handleResponse } from '../lib';
import { ApiResponse } from '../types';
import { ConverteParams, ConverteResult, Currencies } from './types';

const currencyInstance = axios.create({
  baseURL: 'https://currency-converter-pro1.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST,
  },
});

export const fetchCurrencies = async () =>
  handleResponse(
    (await currencyInstance.get<ApiResponse<Currencies>>('currencies')).data,
  );

export const fetchConvert = async (convertParams: ConverteParams) =>
  handleResponse(
    (
      await currencyInstance.get<ApiResponse<ConverteResult>>('convert', {
        params: convertParams,
      })
    ).data,
  );
