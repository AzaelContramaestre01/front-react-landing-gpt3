import React from 'react'

import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilites are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature  title="Chatbots" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
        <Feature  title="Knoledgebase" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
        <Feature  title="Education" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
      </div>
    </div>
  )
}

export default WhatGPT3