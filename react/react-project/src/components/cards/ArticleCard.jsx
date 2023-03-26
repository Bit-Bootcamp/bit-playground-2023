import React from "react";
import { Link } from "react-router-dom";

import "./ArticleCard.styles.css";

const ArticleCard = ({ flags, name, ccn3 }) => {
  return (
    <article className="card">
      <figure>
        <img src={flags.png} alt="flag" />
      </figure>
      <div className="content">
        <h1>{name.common}</h1>
        <p>{name.official}</p>
      </div>
      <div className="read-more">
        <Link to={`/articles/${ccn3}`}>Read more</Link>
      </div>
    </article>
  );
};

export default ArticleCard;
