import {
	AxiosHeaderValue,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosResponseHeaders,
	RawAxiosRequestHeaders,
  } from "axios";
  
  export default class Response<T> {
	data: T;
	status: number;
	statusText: string;
	headers:
	  | AxiosResponseHeaders
	  | Partial<
		  RawAxiosRequestHeaders & {
			"Content-Length": AxiosHeaderValue;
			"Content-Encoding": AxiosHeaderValue;
			"Content-Type": AxiosHeaderValue;
			Server: AxiosHeaderValue;
			"Cache-Control": AxiosHeaderValue;
		  }
		>;
	config: AxiosRequestConfig;
  
	constructor(res: AxiosResponse<T>) {
	  this.data = res.data;
	  this.status = res.status;
	  this.statusText = res.statusText;
	  this.headers = res.headers;
	  this.config = res.config;
	}
  
	getData() {
	  return this.data;
	}
  
	getStatusCode() {
	  return this.status;
	}
  
	isSuccessful() {
	  const statusCode = this.getStatusCode();
	  return statusCode > 199 && statusCode < 400;
	}
  }
  