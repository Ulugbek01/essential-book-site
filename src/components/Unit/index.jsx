import React, { useEffect, useState } from 'react'
import { Container } from './style'
import speakerLouder from '../../assets/imgs/speaker_louder.png'

const Unit = ({id}) => {
    const [unit, setUnit] = useState({});

    useEffect(() => {
    fetch('http://localhost:4000/flashcard')
      .then((res) => res.json())
      .then((res) => setUnit(res[id-1]))
  }, [id])

  console.log(unit);
  return (
    <Container>
        <h2>{unit.en}</h2>
        <div className='word-list__btn'>Word List</div>
        {unit.wordlist?.map((item, index) => {
                let audio = new Audio(`https://www.essentialenglish.review/apps-data/4000-essential-english-words-1/data/unit-${id}/wordlist/${item.sound}`);
            return (
                <div className='wordlist' key={index}>
                    <div className='wordlist-image'>
                        <img width={120} src={`https://www.essentialenglish.review/apps-data/4000-essential-english-words-1/data/unit-${id}/wordlist/${item.image}`} alt="word img" />
                    </div>
                    <div className='wordlist-cover'>
                        <div className='en-word__wrapper'>
                            <span className='en-word'>{item.en}</span>
                            <span className='en-pron'>{item.pron}</span>
                            <img onClick={()=> audio.play()} src={speakerLouder} alt="speaker-louder" width={20} className="c-pointer"/>
                        </div>
                        <div className='en-desc'>{item.desc}</div>
                        <div className='en-exam'>
                            <span className='arrow'>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </span>
                            <p className='f-italic'>{item.exam}</p>
                        </div>
                    </div>
                </div>    
            )
        }
        )}
    </Container>
  )
}

export default Unit