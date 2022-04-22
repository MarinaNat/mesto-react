import React, { useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getCard()])
      .then(([{ name, about, avatar }, cardList]) => {
        const card = cardList.map((data) => {
          return {
            name: data.name,
            link: data.link,
            likes: data.likes,
            id: data._id,
            // userId: userId,
            ownerId: data.owner._id,
          };
        });
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
        setCards(card);
      }) // тут ловим ошибку
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-contener">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <button
            type="button"
            className="profile__avatar-btn"
            onClick={onEditAvatar}
            aria-label="Редактировать аватар"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name">{userName}</h1>
          <p className="profile__user-status">{userDescription}</p>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="редактирование профиля"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Добавить фотографию"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
