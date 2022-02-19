export default function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_open-image ${card.link && "popup_opened"}`}>
      <figure className="popup__figure">
        <img src={card.link} className="popup__image" alt="#" />
        <figcaption className="popup__caption">{card.name}</figcaption>
        <button
          type="button"
          className="button popup__close-button"
          aria-label="Закрыть картинку"
        ></button>
      </figure>
    </div>
  );
}
