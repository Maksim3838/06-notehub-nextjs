// 'use client';

// import { useState } from 'react';
// import { useDebouncedCallback } from 'use-debounce';
// import { keepPreviousData, useQuery } from '@tanstack/react-query';
// import { Toaster } from 'react-hot-toast';

// import css from '../components/NoteForm/NoteForm.module.css';

// import NoteList from '../components/NoteList/NoteList';
// import SearchBox from '../components/SearchBox/SearchBox';
// import Modal from '../components/Modal/Modal';
// import NoteForm from '../components/NoteForm/NoteForm';
// import Pagination from '../components/Pagination/Pagination';
// import { fetchNotes } from '@/lib/api';

// export default function NotesPage() {
//    const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const debouncedSearchQuery = useDebouncedCallback((value: string) => {
//     setSearchQuery(value);
//     setCurrentPage(1);
//   }, 300);

//   const { data, isSuccess, isLoading } = useQuery({
//     queryKey: ['notes', searchQuery, currentPage],
//     queryFn: () => fetchNotes(currentPage, searchQuery),
//     placeholderData: keepPreviousData,
//   });

//   const notes = data?.notes ?? [];
//   const totalPages = data?.totalPages ?? 0;

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className={css.app}>
//       <header className={css.toolbar}>
//         <SearchBox value={searchQuery} onSearch={debouncedSearchQuery} />
//         <Toaster position="top-center" />

//         {isSuccess && totalPages > 1 && (
//           <Pagination
//             totalPages={totalPages}
//             currentPage={currentPage}
//             onPageChange={setCurrentPage}
//           />
//         )}

//         <button className={css.button} onClick={openModal}>
//           Create note +
//         </button>
//       </header>

//       {isLoading && <p>Loading...</p>}
//       <NoteList notes={notes} />

//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <NoteForm onSuccess={closeModal} onCancel={closeModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

   import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to NoteHub</h1>
        <p className={css.description}>
          NoteHub is a simple and efficient application designed for managing
          personal notes. It helps keep your thoughts organized and accessible
          in one place, whether you're at home or on the go.
        </p>
        <p className={css.description}>
          The app provides a clean interface for writing, editing, and browsing
          notes. With support for keyword search and structured organization,
          NoteHub offers a streamlined experience for anyone who values clarity
          and productivity.
        </p>
      </div>
    </main>
  );
}