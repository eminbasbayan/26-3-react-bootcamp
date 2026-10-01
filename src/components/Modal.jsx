import { CircleX } from 'lucide-react';
import './Modal.css';

const Modal = ({ title, description, onClose }) => {
  return (
    <div class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">{title}</h1>
            <button type="button" class="btn-close" onClick={onClose}>
              <CircleX />
            </button>
          </div>
          <div class="modal-body">{description}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
