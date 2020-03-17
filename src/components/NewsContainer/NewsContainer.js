import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = (props) => {

  const selectedNewsCards = props.news[props.selectedMenu].map(article => (
    <NewsArticle
      key={article.id}
      id={article.id}
      headline={article.headline}
      img={article.img}
      description={article.description}
      url={article.url}
    />
  ));



  return (
    <div className="news-container">
      {selectedNewsCards}
    </div>
  )
}

export default NewsContainer;
