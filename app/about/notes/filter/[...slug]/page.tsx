import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
// import type { NoteListResponse } from '@/lib/api';

type PropsFilter = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesByCategory({ params }: PropsFilter) {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];
  const response = await getNotes(category);

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}
