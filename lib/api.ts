import axios from 'axios';
import { Note } from '../types/note';

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

const myToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

export const getNotes = async (cstegoryId?: string) => {
  
  const res = await axios.get('/notes', {
    params: { cstegoryId },
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  return res.data;
};

export async function getSingleNote(id: string) {
  const response = await axios.get<Note>(`/notes/${id}`);
  return response.data;
}

