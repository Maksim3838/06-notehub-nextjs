import axios from 'axios';
import { Note } from '../types/note';


export type NoteListResponse = {
  notes: Note[];
  totalPages: number;
};

const myToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://next-v1-notes-api.goit.study',
  headers: {
    Authorization: `Bearer ${myToken}`,
  },
});

if (!myToken) {
  throw new Error('NEXT_PUBLIC_NOTEHUB_TOKEN is missing');
}

export const getNotes = async (params?: { search?: string; page?: number }): Promise<NoteListResponse> => {
  const response = await api.get<NoteListResponse>('/notes', { params });
  return response.data;
};

export const getSingleNote = async (id: string): Promise<Note> => {
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
};

export const createNote = async (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> => {
  const response = await api.post<Note>('/notes', note);
  return response.data;
};

export const updateNote = async (id: string, note: Partial<Omit<Note, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Note> => {
  const response = await api.put<Note>(`/notes/${id}`, note);
  return response.data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};
