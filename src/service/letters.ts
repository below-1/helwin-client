import { api } from './axios';

export async function letters_for(tag: 'vocal' | 'konsonan') : Promise<any> {
  const resp = await api.get(`letters/${tag}`);
  return resp.data;
}
