import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ id, headline, img, description, url }) => {
  return (
    <div className="news-article">
      <img src={img} alt={description} />
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={url}>Go to article</a>
    </div>
  )
}

export default NewsArticle;
