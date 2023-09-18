import { ApiResponse, EmptyResult } from './types';

export const handleResponse = <T>(res: ApiResponse<T>): T | EmptyResult => {
  if (res.success) {
    return res.result;
  } else {
    console.error(res.message);
    return null;
  }
};
