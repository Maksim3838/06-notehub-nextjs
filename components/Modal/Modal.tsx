// 'use client';

// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import type { ReactNode } from 'react';
// import css from './Modal.module.css';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: ReactNode;
// }

// export default function Modal({
//   isOpen,
//   onClose,
//   children,
// }: ModalProps) {
//   useEffect(() => {
//     if (!isOpen) return;

//     const handleEsc = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleEsc);
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.removeEventListener('keydown', handleEsc);
//       document.body.style.overflow = '';
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;
//   if (typeof document === 'undefined') return null;

//   return createPortal(
//     <div
//       className={css.backdrop}
//       role="dialog"
//       aria-modal="true"
//       onClick={(e) => {
//         if (e.target === e.currentTarget) {
//           onClose();
//         }
//       }}
//     >
//       <div className={css.modal}>{children}</div>
//     </div>,
//     document.body
//   );
// }

'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import css from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
}
