import React, { useState, useEffect, useRef } from 'react';
import { Card } from './Card';
import { images } from '../imagenes.jsx';
import { Navigate, useNavigate } from 'react-router-dom';
import { addUser } from './addUser.jsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

export const Jugar = () => {
  const [unFlippedCards, setUnFlippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [turns,setTurns]= useState(0);
  const [turnedCards,setTurnedCards] = useState(0);
  const [running,setRuning]= useState(true);
  const [time,setTime]=useState(0);
  const navigate= useNavigate()
  const timer=useRef()
  const [user] = useAuthState(auth);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  useEffect(()=>{
    if(running){
      timer.current=setInterval(()=>{
        setTime(pre=>pre+1)
      },1000)
    }
  },[running])

  useEffect(()=>{
    checkGameCompletion()
  },[turnedCards])
  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, []);

  useEffect(() => {
    checkForMatch();
  }, [firstCard, secondCard]);

  const flipCard = (name, number) => {
    if (firstCard && firstCard.name === name && firstCard.number === number) {
      return 0;
    }

    if (!firstCard) {
      setFirstCard({ name, number });
      return 1;
    } else if (!secondCard) {
      setSecondCard({ name, number });
      return 1;
    }
  };

  const checkForMatch = () => {
    if (firstCard && secondCard) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  };

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
    setTurnedCards(turnedCards+1)
    setTurns(turns+1)
  };

  const unflipCards = () => {
    setUnFlippedCards([firstCard.number, secondCard.number]);
    resetCards();
    setTurns(turns+1)
  };

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
  };
  
  const checkGameCompletion = () => {
    if (cards.length!=0 && turnedCards*2 === cards.length ) {
      setRuning(false)
      let FinalTime=format(time)
      alert(`Congratulations! You completed the game in ${turns} turns and in ${FinalTime}.`);
      if(user?.displayName){
        const name=user.displayName
        addUser(name,turns);
      }
      navigate('/');
    }
  };
  const format=(time)=>{
    let hours= Math.floor(time/60/60%24)
    let minutes= Math.floor(time/60%60)
    let seconds= Math.floor(time%60)
    hours= hours <10 ? '0'+hours : hours
    minutes=minutes <10 ? '0'+minutes : minutes
    seconds= seconds <10 ? '0'+seconds : seconds
    return hours +":"+minutes+":"+seconds
  }
  return (
    <>
      <div className='jugar'>
        <div className='cards-container'>
          {cards.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              number={index}
              frontFace={card.src}
              flipCard={flipCard}
              unFlippedCards={unFlippedCards}
              disableCards={disabledCards}
              turnedCards={turnedCards}
              checkGameCompletion={checkGameCompletion}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>Turns: {turns}</h2>
      </div>
    </>
  );
  
};
