import { api } from './axios';

export async function search_kata(kata: string) : Promise<any> {
  let param: string = kata.trim();
  param = param.toLowerCase();
  const resp = await api.get(`kata/${param}`);
  return resp.data;
}

export async function parse_tokens(kata: string) : Promise<any> {
  let param: string = kata.trim();
  param = param.toLowerCase();
  const resp = await api.get(`kata-tokens/${param}`);
  return resp.data;
}