import Axios, { AxiosInstance } from "axios";
import { IHttpClientService, QueryParams } from "../core/services";

class AxiosHttpClientService implements IHttpClientService {
  private readonly api: AxiosInstance;
  private readonly baseUrl: string = "https://hn.algolia.com/api/v1";

  constructor() {
    this.api = Axios.create({ baseURL: this.baseUrl });
  }

  async get<DataType>(
    uri: string,
    queryParams: QueryParams
  ): Promise<DataType> {
    const data = await this.tryGet<DataType>(uri, queryParams);
    return data;
  }

  private async tryGet<DataType>(
    uri: string,
    queryParams: QueryParams
  ): Promise<DataType> {
    const response = await this.api.get<DataType>(uri, {
      params: queryParams,
    });

    return response.data;
  }
}

const axiosHttpClient = new AxiosHttpClientService();
export { axiosHttpClient };
