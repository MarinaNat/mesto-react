import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div id="element-template">
      <div className="element">
        <button
          className="element__delete-btn"
          type="button"
          aria-label="Кнопка удаления"
        ></button>
        <div className="element__container">
          <img
            className="element__foto"
            data-type="auto"
            src={card.link}
            all={card.name}
            onClick={handleClick}
          />
        </div>
        <div className="element__info">
          <h2 className="element__text">{card.name}</h2>
          <div className="like like_contener">
            <button
              className="like__btn element__like"
              type="button"
              aria-label="Лайк"
            ></button>
            <span className="like__counter">{card.likes.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
