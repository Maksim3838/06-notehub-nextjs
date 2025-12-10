import axios from 'axios';
import { Note } from '../types/note';

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

const myToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

const api = axios.create({
  baseURL: 'https://next-v1-notes-api.goit.study',
  headers: {
    Authorization: `Bearer ${myToken}`,
    'Content-Type': 'application/json',
  },
});

export const getNotes = async (categoryId?: string): Promise<NoteListResponse> => {
  const response = await api.get<NoteListResponse>('/notes', {
    params: { categoryId },
  });

   return response.data;
};

export const createNote = async (note: Partial<Note>): Promise<Note> => {
  const response = await api.post<Note>('/notes', note);
  return response.data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};


