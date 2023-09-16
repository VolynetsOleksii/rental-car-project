import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, BtnClose, CloseIcon, ModalWindow } from "./Modal.styled";
import sprite from "../../assets/images/sprite.svg";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscKeyDown);

    return () => {
      window.removeEventListener("keydown", handleEscKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <BtnClose type="button" onClick={onClose} aria-label="Close Modal">
          {" "}
          <CloseIcon>
            <use href={sprite + "#icon-close"}></use>
          </CloseIcon>
        </BtnClose>
        {children}
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
