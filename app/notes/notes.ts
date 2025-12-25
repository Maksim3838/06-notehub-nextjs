import axios from 'axios';
import { Note } from '@/types/note';

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://next-v1-notes-api.goit.study',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};
