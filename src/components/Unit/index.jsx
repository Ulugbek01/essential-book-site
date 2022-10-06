import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Navbar } from './style'
import speakerLouder from '../../assets/imgs/speaker_louder.png'
import backArrow from '../../assets/imgs/circle_back_arrow-48.png'

const Unit = ({ id, title }) => {
    const navigate = useNavigate();
    const [unit, setUnit] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/flashcard')
            .then((res) => res.json())
            .then((res) => setUnit(res[id - 1]))
    }, [id])

    // console.log(unit?.reading[0]);
    return (
        <Container>
            <Navbar className='d-flex align-items-center'>
                <img onClick={() => navigate('/')} width={35} src={backArrow} alt="circle_back_arrow img" className='c-pointer' />
                <div className='title'>{title}</div>
            </Navbar>
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
                                <img onClick={() => audio.play()} src={speakerLouder} alt="speaker-louder" width={20} className="c-pointer" />
                            </div>
                            <div className='en-desc'>{item.desc}</div>
                            <div className='en-exam'>
                                <span className='arrow'>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </span>
                                <p className='f-italic'>{`${item.exam}`.replace('<strong>', '').replace('</strong>', '')}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
            {/* <div className=''>
            <img src={`https://www.essentialenglish.review/apps-data/4000-essential-english-words-1/data/unit-${id}/reading/${unit?.reading[0]?.image}`} alt="" />
        </div> */}
        </Container>
    )
}

export default Unit