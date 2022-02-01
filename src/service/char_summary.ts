import { api } from './axios';

export async function summary(tag: 'vocal' | 'konsonan') {
  const resp = await api.get(`chars?tag=${tag}`);
  return resp.data;
}
