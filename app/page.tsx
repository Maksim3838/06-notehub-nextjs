import css from "../app/notes/Home.module.css"
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import NoteList from "../components/NoteList/NoteList";
import css from "./App.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import SearchBox from "../components/SearchBox/SearchBox";
import Modal from "../components/Modal/Modal";
import NoteForm from "../components/NoteForm/NoteForm";
import Pagination from "../components/Pagination/Pagination";
export default function NotesPage () {
  return (
   
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const debouncedSearchQuery = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  }, 300);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["notes", searchQuery, currentPage],
    queryFn: () => fetchNotes( currentPage, searchQuery),
    placeholderData: keepPreviousData,
  });

  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 0;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchQuery} onSearch={debouncedSearchQuery} />
        <Toaster position="top-center" />
        {isSuccess && totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
      </header>
      <NoteList notes={notes} />
      {isLoading && <p>Loading...</p>}
      {isModalOpen && (
        
 <Modal onClose={closeModal}>
          <NoteForm onSuccess={closeModal} onCancel={closeModal} />
        </Modal>
      )}
    </div>
  );
 )
};

   