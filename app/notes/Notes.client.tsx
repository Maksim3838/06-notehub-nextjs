

'use client';

import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getNotes } from '../../lib/api';
import { debounce } from '../notes/debounce';
import { NoteListResponse } from '@/components/NoteList/NoteList';

import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import Modal from '@/components/Modal/Modal';
import NoteForm from '@/components/NoteForm/NoteForm';
import NoteList from '@/components/NoteList/NoteList';

export default function NotesClient() {
 
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const debounced = debounce((value: string) => {
    setDebouncedSearch(value);
    setPage(1); 
  }, 400);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    debounced(value);
  };

    const { data, isLoading, isError, error, isFetching } =
    useQuery<NoteListResponse, Error>({
      queryKey: ['notes', { page, search: debouncedSearch }],
      queryFn: () =>
        getNotes({
          page,
          search: debouncedSearch,
          limit: 10,
        }),
      placeholderData: keepPreviousData,
    });

  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 1;

   const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      
      <SearchBox value={search} onSearch={handleSearchChange} />

     
      <button onClick={openModal}>Add Note</button>

            {isLoading && <p>Loading notes…</p>}
      {isError && <p>Error: {error?.message}</p>}

            {notes.length > 0 && !isLoading && !isError && <NoteList notes={notes} />}

            {totalPages > 1 && !isLoading && !isError && (
        <Pagination
          currentPage={page}        
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}

          <Modal isOpen={isModalOpen} onClose={closeModal}>
  <NoteForm
    onSuccess={closeModal}
    onCancel={closeModal} 
  />
</Modal>
    </main>
  );
}
