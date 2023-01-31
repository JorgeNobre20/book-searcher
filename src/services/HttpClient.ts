import { IHttpClientService } from "../core/services";
import { axiosHttpClient } from "./AxiosHttpClient";

export const httpClientService: IHttpClientService = axiosHttpClient;
