import React,{useEffect, useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import backFace from '../images/question-mark-card.png'
export const Card = ({name,number,frontFace,flipCard,unFlippedCards,disableCards,turnedCards,checkGameCompletion}) => {

  const [isFlipped,setIsFlipped] =useState(false);
  const[hasEvent,setHasEvent] = useState(true);

  useEffect(()=>{
    if (unFlippedCards.includes(number)){
      setTimeout(()=> setIsFlipped(false),700);
    }
  },[unFlippedCards])

  useEffect(() => {
    if (disableCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disableCards])

  const handleClick = e => {
    const value = flipCard(name, number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
  }

  
  return (
    <>
    <div className='card'>
      <ReactCardFlip isFlipped={isFlipped}>
        <img className='card-image' src={backFace} alt='back-face' onClick={hasEvent ? handleClick : null}></img>
        <img className='card-image' src={frontFace} alt='front-face' onClick={hasEvent? handleClick : null}></img>
      </ReactCardFlip>
    </div>
    </>
  )
}
