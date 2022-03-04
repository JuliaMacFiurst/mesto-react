import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        value={props.name}
        onChange={handleNameChange}
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
        value={props.description}
        onChange={handleDescriptionChange}
      />
      <span className="popup__input-error about-input-error"></span>
    </PopupWithForm>
  );
}