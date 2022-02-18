import React, { useState, useEffect } from 'react'
import avatar from '../images/avatar.jpg'
import Card from './Card';

export default function Main({onEditAvatar, onEditInfo, onAddPlace, onCardClick, onDeleteClick}) {

    const [userAvatar, setUserAvatar] = useState(avatar);
    const [userName, setUserName] = useState('Жак-Ив Кусто');
    const [userAbout, setUserAbout] = useState('Исследователь океана');
    const [cards, setCards] = useState([]);


return (
    <main className="main">
        <section className="profile page__profile">
            <div className="profile__avatar-container" >
                <div
                  className="profile__avatar"
                  style={{ backgroundImage: `url(${userAvatar})` }}
                  onClick={onEditAvatar}>
                </div>
            </div>
            <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button 
                  className="button profile__edit-button" 
                  type="button"
                  onClick={onEditInfo}>
                </button>
                <p className="profile__about">{userAbout}</p>
            </div>
        <button 
          className="button profile__add-button"
          type="button"
          aria-label="Добавить еще одно место"
          onClick={onAddPlace}>
        </button>
        </section>
        <section className="places page__places">
            <ul className="places__list">
                {cards.map((card) => (<Card key={card._id}
                card={card}
                onCardClick={onCardClick}
                onDeleteClick={onDeleteClick}
                 />))
       }
            </ul>
        </section>
    </main>
    );
}
