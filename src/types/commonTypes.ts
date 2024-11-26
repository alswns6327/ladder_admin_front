export interface apiReturnType<RT> {
  msg : string;
  code : string;
  data : RT;
}

export type apiRequestHeadersType = {
"Content-Type" : string
}

export type apiRequestInfo<T> = {
  uri : string,
  httpMethod : string,
  param? : T
  headers? : apiRequestHeadersType
}