import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = (props) => {
  const searchTermRegex = new RegExp(props.searchQuery.toLowerCase());
  let cardsToDisplay;
  let selectedNewsCards

  if (props.news === null) {
    cardsToDisplay = (<p>Loading ...</p>);

  } else {
    cardsToDisplay = props.news[props.selectedMenu].map(article => (
      <NewsArticle
        key={article.id}
        id={article.id}
        headline={article.headline}
        img={article.img}
        description={article.description}
        url={article.url}
      />
    ));

  }

  if(props.searchQuery !== '') {
    cardsToDisplay = cardsToDisplay.filter(news => {
      return (news.props.headline.toLowerCase().match(searchTermRegex)
             || news.props.description.match(searchTermRegex))
    });
  }

  return (
    <div className="news-container">
      {cardsToDisplay}
    </div>
  )
}

export default NewsContainer;
