import axios from 'axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  category: string;
  user: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

const myToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

export const getNotes = async (cstegoryId?: string) => {
  // const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  // await delay(2000);
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

// lib/api.ts

// import axios from 'axios';

// export type Note = {
//   id: string;
//   title: string;
//   content: string;
//   categoryId: string;
//   userId: string;
//   createdAt: string;
//   updatedAt: string;
// };

// export type NoteListResponse = {
//   notes: Note[];
//   total: number;
// };

// axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

// export const getNotes = async () => {
//   const res = await axios.get<NoteListResponse>('/notes');
//   return res.data;
// };
