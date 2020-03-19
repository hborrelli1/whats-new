import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

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

NewsArticle.propTypes = {
  id: PropTypes.string,
  headline: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
}

export default NewsArticle;
