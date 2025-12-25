import axios from 'axios';
import { Note } from '@/types/note';

export type NoteListResponse = {
  notes: Note[];
  totalPages: number;
};

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://next-v1-notes-api.goit.study',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchNotes = async (
  page: number,
  search?: string
): Promise<NoteListResponse> => {
  const { data } = await api.get('/notes', {
    params: {
      page,
      search,
    },
  });

  return data;
};
