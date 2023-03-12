import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { data } from "../../data";

const Article = () => {
  const [article, setArticle] = useState();
  const { id } = useParams();

  // {id:1 , username:"hama"}

  useEffect(() => {
    for (const d of data) {
      if (d.id.toString() === id) {
        setArticle(d);
      }
    }
  }, []);

  return (
    <div>
      {article && (
        <>
          <h1>{article.title}</h1>
          <figure>
            <img src={article.imgUrl} alt="news" />
          </figure>
          <p>{article.desc}</p>
        </>
      )}
    </div>
  );
};

export default Article;
