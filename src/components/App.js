import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

export default function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleDeleteClick() {
    setConfirmDeletePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
    setConfirmDeletePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditInfo={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onDeleteClick={handleDeleteClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        {/* ПОПАП АВАТАРА */}
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="avatarLink"
            className="popup__input popup__input_type_avatar"
            id="avatar-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>

        {/*  ПОПАП ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ */}
        <PopupWithForm
          name="profile-edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="userName"
            className="popup__input popup__input_type_name"
            id="name-input"
            placeholder="Ваше имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            type="text"
            name="userAbout"
            className="popup__input popup__input_type_about"
            id="about-input"
            placeholder="Ваш род занятий"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error about-input-error"></span>
        </PopupWithForm>

        {/* ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ */}
        <PopupWithForm
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="cardTitle"
            className="popup__input popup__input_type_card-title"
            id="title-input"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error title-input-error"></span>
          <input
            type="url"
            name="cardLink"
            className="popup__input popup__input_type_card-link"
            id="link-input"
            autoComplete="off"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>

        {/* ПОПАП ПОДТВЕРЖДЕНИЯ УДАЛЕНИЯ */}
        <PopupWithForm
          name="confirm-delete"
          title="Вы уверены?"
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
        />

        {/* ПОПАП ПРОСМОТРА КАРТИНКИ */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}
