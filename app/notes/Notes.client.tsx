'use client';

import { useQuery } from '@tanstack/react-query';
import { getNotes } from '../../lib/api';

export default function NotesClient() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['notes'],
    queryFn: getNotes,
  });

  if (isLoading) return <div>Loading notes…</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  const notes = data?.notes ?? [];

  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}

