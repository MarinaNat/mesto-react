import React from "react";
import PopupOutOfForm from "./PopupOutOfForm";
import union from "../images/union.svg";
import unionFalse from "../images/unionFalse.svg";

function InfoTooltip({ isOpen, onClose, name, registrationResult }) {
  return (
    <PopupOutOfForm
      name={name}
      isOpen={isOpen}
      onClose={onClose}
    >
        <img
          className="tool-tip__image"
          src={registrationResult ? union : unionFalse}
          alt={registrationResult ? "Успех" : "Ошибка"}
        />
        <h2 className="tool-tip__title">
        {registrationResult
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
    </PopupOutOfForm>
  );
}

export default InfoTooltip;
