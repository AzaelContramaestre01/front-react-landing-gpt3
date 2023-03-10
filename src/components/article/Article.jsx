import React from "react"

import './article.css'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={imgUrl} alt="Blog Image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Articles</p>
      </div>
    </div>
  )
}

export default Article
