import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import closeIcon from '../../assets/cruz.svg?url';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Bloqueia o scroll do body quando o modal abre
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura o scroll do body quando o modal fecha
      document.body.style.overflow = 'unset';
    }

    // Cleanup quando o componente desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <img src={closeIcon} alt="Fechar" className="close-icon" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}