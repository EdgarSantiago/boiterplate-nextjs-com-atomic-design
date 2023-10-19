import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  getPath,
  getCustomUrl,
  createUrlParamFromObj,
  getContentType,
  createHeader,
} from "../../utils/index";

export interface ApiRequestPayload {
  path?: string;
  params?: Record<string, any>;
  url?: string;
  type?: string;
  headers?: Record<string, any>;
  body?: any;
}

export default class ApiRequest {
  private static apiInstance: AxiosInstance = axios.create({
    baseURL: "",
    timeout: 10000,
    validateStatus: (status) => status >= 200 && status < 300,
  });

  private static async request<T>(
    method: string,
    route: string,
    payload: ApiRequestPayload = {}
  ): Promise<AxiosResponse<T>> {
    const path = getPath(payload.path);
    const params = createUrlParamFromObj(payload.params);
    const customUrl = getCustomUrl(payload.url);
    const contentType = getContentType(payload.type);
    const baseHeaders = { "Content-Type": contentType };
    const headers = createHeader(payload.headers, baseHeaders);
    const url = customUrl.length > 0 ? customUrl : route + path + params;
    const data = payload.body || {};

    const requestObj = { url, headers, method, data };

    try {
      const response = await this.apiInstance.request<T>(requestObj);
      return response;
    } catch (err: any) {
      if (err && err.response && err.response.data) {
        throw err.response.data;
      } else if (err && err.response) {
        throw err.response;
      } else {
        throw err;
      }
    }
  }

  static get<T>(route: string) {
    return (payload: ApiRequestPayload = {}): Promise<AxiosResponse<T>> =>
      this.request<T>("GET", route, payload);
  }

  static put<T>(route: string) {
    return (payload: ApiRequestPayload = {}): Promise<AxiosResponse<T>> =>
      this.request<T>("PUT", route, payload);
  }

  static post<T>(route: string) {
    return (payload: ApiRequestPayload = {}): Promise<AxiosResponse<T>> =>
      this.request<T>("POST", route, payload);
  }

  static delete<T>(route: string) {
    return (payload: ApiRequestPayload = {}): Promise<AxiosResponse<T>> =>
      this.request<T>("DELETE", route, payload);
  }

  static patch<T>(route: string) {
    return (payload: ApiRequestPayload = {}): Promise<AxiosResponse<T>> =>
      this.request<T>("PATCH", route, payload);
  }
}
