import { useEffect } from 'react';
import { CircleX } from 'lucide-react';
import './Modal.css';
import { createPortal } from 'react-dom';

const Modal = ({ title, description, onClose }) => {
  useEffect(() => {
    console.log('Component İlk yüklendiğinde çalıştı!');

    // clean-up function
    return () => {
      console.log("Component DOM'dan kaldırıldığında çalıştı!");
    };
  }, []);

  return createPortal(
    <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button type="button" className="btn-close" onClick={onClose}>
              <CircleX />
            </button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>

      <div className="modal-overlay" onClick={onClose}></div>
    </div>,
    document.getElementById('portal'),
  );
};

export default Modal;
