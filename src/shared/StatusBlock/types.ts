import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

export interface ILoadingProps {
  isLoading: boolean;
}

export interface IErrorProps {
  error:  FetchBaseQueryError | SerializedError | undefined
  handleRetry: () => void
}