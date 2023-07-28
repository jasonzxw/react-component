import { createPortal } from "react-dom";
import "./index.css";

export interface ModalProps {
  visible: boolean;
  closeModal: () => void;
}
const Modal = ({ visible, closeModal }: ModalProps) => {
  return (
    <>
      {visible &&
        createPortal(
            <div className="modal-container" onClick={closeModal}>
              <div className="modal"></div>
            </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
