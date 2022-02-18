
import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';


export default function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  // const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  // const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  // const [selectedCard, setSelectedCard] = useState({});
  // const [confirmDeletePopup, setDeletePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  // function handleEditProfileClick() {
  //   setEditProfilePopupOpen(true);
  // }

  // function handleAddPlaceClick() {
  //   setAddPlacePopupOpen(true);
  // }

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  // }

  // function handleDeleteClick() {
  //   setDeletePopupOpen(true);
  // }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    // setEditProfilePopupOpen(false);
    // setAddPlacePopupOpen(false);
    // setSelectedCard({});
    // setDeletePopupOpen(false);
  }

  return (
    <div className="page">
    <div className="page__container">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      // onEditInfo={handleEditProfileClick}
      // onAddPlace={handleAddPlaceClick}
      // onCardClick={handleCardClick}
      // onDeleteClick={handleDeleteClick}
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
          <span className="popup__input-error avatar-input-error" ></span>
        </PopupWithForm>

      <div className="popup popup_profile-edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
            <form 
              className="popup__form" 
              name="userData"
              noValidate>
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
              <span className="popup__input-error name-input-error" ></span>
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
              <span className="popup__input-error about-input-error" ></span>
              <button 
                type="submit" 
                className="popup__sbmt-button">
                Сохранить</button>
            </form>
          <button 
            className="button popup__close-button"
            type="button"
            aria-label="Закрыть редактирование профиля">
          </button>
        </div>
      </div>
      
      <div className="popup popup_add-card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form 
          className="popup__form"
          name="addCard"
          noValidate>
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
              <span className="popup__input-error title-input-error" ></span>
            <input
              type="url"
              name="cardLink"
              className="popup__input popup__input_type_card-link"
              id="link-input"
              autoComplete="off"
              placeholder="Ссылка на картинку"
              required
               />
               <span className="popup__input-error link-input-error" ></span>
            <button 
            type="submit" 
            className="popup__sbmt-button">Создать</button>
          </form>
          <button className="button popup__close-button" type="button" aria-label="Закрыть добавление карточки"></button>
        </div>
      </div>
    </div>

    <div className="popup popup_open-image">
        <figure className="popup__figure">
          {/* <img src={pic} className="popup__image" alt="#"/> */}
          <figcaption className="popup__caption"></figcaption>
          <button type="button" className="button popup__close-button" aria-label="Закрыть картинку"></button>
        </figure>
    </div>

    <div className="popup popup_confirm-delete">
      <div className="popup__container">
        <form className="popup__form" name="popupForm" noValidate>
          <h2 className="popup__title popup__title_type_one-input">Вы уверены?</h2>
          <button 
          type="submit" 
          className="popup__sbmt-button">Да</button>
        </form>
        <button type="button" className="button popup__close-button" aria-label="Закрыть"></button>
      </div>
    </div>

    </div>
  );
}

