

export default function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card)
      }

    return(
        <li className="place">
        <img 
         className="place__photo popup__open-button"
         src={props.card.link} 
         alt={props.card.name} 
         onClick={handleCardClick}
         />
        <div className="place__description">
          <h2 className="place__title"></h2>
          <div className="place__like-container">
            <button 
              className="place__like-button"
              type="button"
              aria-label="Нравится">
            </button>
            <span className="place__like-count">0</span>
         </div>
         </div>
        <button className="button place__remove-button"></button>
      </li>
    )
}