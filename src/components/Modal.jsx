
import styles from "./Modal.module.css";
function Modal({children,onClose}) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}/>
      <dialog className={styles.modal}>{children}</dialog>
    </>
  )
}

export default Modal