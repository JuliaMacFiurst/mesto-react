import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import  api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = React.useState([])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleUpdateUser(userData) {
    api.setUserInfoApi(userData)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups()
      })
      .catch((err) => console.log(err))
  }

  function handleUpdateAvatar(data) {
    api.setUserAvatar(data)
    .then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch((err) => console.log(err))
}


  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
          setCurrentUser(data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => console.log(err))
  }, [])


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => console.log(err))
} 

function handleDeleteClick() {
  setIsConfirmDeletePopupOpen(true);
}

function handleCardDelete(card) {
  api.deleteCard(card._id)
    .then(() => {
      setCards(cards.filter((item) => item !== card))
    })
    .catch((err) => console.log(err))
}

function handleAddPlaceSubmit(cardData) {
  api.addUserCard(cardData)
    .then((newCard) => {
      setCards([newCard, ...cards])
      closeAllPopups()
    })
    .catch((err) => console.log(err))
}

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditInfo={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onDeleteClick={handleDeleteClick}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
          onCardClick={handleCardClick}
          cards={cards}
        />
        <Footer />

        <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        onUpdateAvatar={handleUpdateAvatar}
        /> 

        <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        onUpdateUser={handleUpdateUser}
        /> 

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}        
          onAddPlace={handleAddPlaceSubmit}
        />

        {/* ПОПАП ПОДТВЕРЖДЕНИЯ УДАЛЕНИЯ */}
        <PopupWithForm
          name="confirm-delete"
          title="Вы уверены?"
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
        />

        {/* ПОПАП ПРОСМОТРА КАРТИНКИ */}
        <ImagePopup 
        isOpen={isImagePopupOpen}
        card={selectedCard} 
        onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}
