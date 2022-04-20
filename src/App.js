import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./index.css";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="user-name"
          type="text"
          name="userName"
          className="popup__input popup__user popup__user_type_name"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="user-name-error" className="error"></span>
        <input
          id="user-status"
          type="text"
          name="userStatus"
          className="popup__input popup__user popup__user_type_status"
          required
          minLength="2"
          maxLength="200"
        />
        <span id="user-status-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="avatar"
          type="url"
          name="userAvatar"
          className="popup__input popup__avatar"
          required
        />
        <span id="avatar-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="element-name"
          type="text"
          name="elementName"
          placeholder="Название"
          className="popup__input popup__element popup__element_type_name"
          required
          minLength="2"
          maxLength="30"
        />
        <span id="element-name-error" className="error"></span>
        <input
          id="element-link"
          type="url"
          name="elementLink"
          placeholder="Ссылка на картинку"
          className="popup__input popup__element popup__element_type_link"
          required
        />
        <span id="element-link-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?"></PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
