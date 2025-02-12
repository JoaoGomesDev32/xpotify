import axios, { AxiosResponse } from "axios";

interface RequesterConfig {
  baseURL?: string;
  options?: object;
  Authorization?: string;
  headers?: object;
}

export const requester = (config: RequesterConfig, contentType?: string) => {
  const service = axios.create({
    baseURL: config.baseURL || "https://api.spotify.com/v1",
    ...config.options,
  });

  service.interceptors.request.use(
    (req) => {
      req.headers.set("Content-Type", contentType || "application/json");
      req.headers.set("Authorization", config.Authorization || window.localStorage.access_token);
      if (config.headers) {
        Object.entries(config.headers).forEach(([key, value]) => {
          req.headers.set(key, value as string);
        });
      }

      return req;
    },
    (error) => Promise.reject(error)
  );

  service.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.response.status === 401 && window.location.pathname !== '/logout') {
        return window.location.href = '/logout';
      }
    }
  )

  return {
    async get<T = unknown>(uri: string): Promise<AxiosResponse<T>> {
      const response = await service.get<T>(uri);
      return response;
    },
    async post<T = unknown>(uri: string, data: T): Promise<AxiosResponse<T>> {
      const response = await service.post<T>(uri, data);
      return response;
    },
    async put<T = unknown>(uri: string, data: T): Promise<AxiosResponse<T>> {
      const response = await service.put<T>(uri, data);
      return response;
    },
    async patch<T = unknown>(uri: string, data: T): Promise<AxiosResponse<T>> {
      const response = await service.patch<T>(uri, data);
      return response;
    },
    async delete<T = unknown>(uri: string, data?: T): Promise<AxiosResponse<T>> {
      const response = await service.delete<T>(uri, { data });
      return response;
    },
  };
};