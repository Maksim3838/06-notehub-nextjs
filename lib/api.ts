import axios from 'axios';
import { Note } from '../types/note';

export type NoteListResponse = {
  notes: Note[];
  totalPages: number;
};

const myToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

const api = axios.create({
  baseURL: 'https://next-v1-notes-api.goit.study',
  headers: {
    Authorization: `Bearer ${myToken}`,
  },
});

export const getNoteById = async (id: string): Promise<Note> => {
  if (!id) throw new Error('Note ID is required');

  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
};


interface GetNotesParams {
  search?: string;
  page?: number;
  limit?: number;
}

export const getNotes = async ({
  search,
  page,
  limit,
}: GetNotesParams = {}): Promise<NoteListResponse> => {
  const response = await api.get<NoteListResponse>('/notes', {
    params: {
      search,
      page,
      limit,
    },
  });

  return response.data;
};

export interface CreateNoteDto {
  title: string;
  content: string;
  tag: string;
}

export const createNote = async (note: CreateNoteDto): Promise<Note> => {
  const response = await api.post<Note>('/notes', note);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
};


