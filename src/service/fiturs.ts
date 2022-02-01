import { api } from './axios';

export async function fitur_for(tag: 'vocal' | 'konsonan') : Promise<any> {
  const resp = await api.get(`fiturs/${tag}`);
  return resp.data;
}
