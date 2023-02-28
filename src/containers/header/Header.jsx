import React from 'react'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

import './header.css'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis doloribus excepturi, totam ea temporibus praesentium, facere neque ipsum vero incidunt mollitia voluptatum reprehenderit culpa aut id natus quibusdam fuga sapiente!</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access in last 24hrs</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header