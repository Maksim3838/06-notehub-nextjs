'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getSingleNote } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function NoteDetailsClient() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  const handleGoBack = () => {
    const isSure = confirm('Are you sure you want to go back? ');
    if (isSure) {
      router.push('/notes/filter/all');
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError || !note) return <p>Some error: {error?.message}</p>;
  const formattedDate = note?.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note?.createdAt}`;

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <h2>{note?.title}</h2>
      <p>{note?.content}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
