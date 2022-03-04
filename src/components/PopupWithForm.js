export default function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  children,
  onSubmit,
  isLoading,
  buttonText

}) {
  return (
    <div id={`popup-${name}`} className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          id={`popup-${name}__form`}
          name={`${name}-popup`}
          onSubmit={onSubmit}
        >
          {children}
          <button
            id={`popup-${name}__save-button`}
            type="submit"
            value="Сохранить"
            className="popup__sbmt-button"
          >
            {isLoading ? `${buttonText}...` : `${buttonText}`}
          </button>
        </form>
        <button
          className="button popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
