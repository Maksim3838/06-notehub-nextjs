'use client';

import { useQuery } from '@tanstack/react-query';
import { getNotes } from '../../lib/api';

export default function NotesClient() {
  const { data: notes, isLoading, isError, error } = useQuery({
    queryKey: ['notes'],
    queryFn: getNotes,
  });

  if (isLoading) return <div>Loading notes…</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <ul>
      {notes!.map(note => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}

