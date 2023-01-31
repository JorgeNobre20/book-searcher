export type QueryParams = {
  [key: string]: string | number;
};

export interface IHttpClientService {
  get<DataType>(uri: string, queryParams: QueryParams): Promise<DataType>;
}
