import "./index.css";

export interface ToastProps {
  visible: boolean;
  closeToast: () => void;
  title: string;
  content: string;
}

const Toast = ({ visible, closeToast, title, content }: ToastProps) => {
  return (
    <>
      {visible && (
        <div onClick={closeToast} className="toast">
          <div className="toast-title">{title}</div>
          <div className="toast-contet">{content}</div>
        </div>
      )}
    </>
  );
};

export default Toast