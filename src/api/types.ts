interface SuccessApiResponse<T> {
  success: true;
  result: T;
}
interface FailedApiResponse {
  success: false;
  message: string;
}
export type ApiResponse<T> = SuccessApiResponse<T> | FailedApiResponse;
export type EmptyResult = null;
