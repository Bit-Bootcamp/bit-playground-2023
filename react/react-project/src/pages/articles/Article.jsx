import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";

// import { data } from "../../data";
import { useGetCountryByCodeQuery } from "../../redux/services/countriesApi";

const Article = () => {
  // const [article, setArticle] = useState();
  const { code } = useParams();

  const {
    data: singleCountry,
    isLoading,
    error,
  } = useGetCountryByCodeQuery(code);

  // {id:1 , username:"hama"}

  // useEffect(() => {
  //   for (const d of data) {
  //     if (d.id.toString() === id) {
  //       setArticle(d);
  //     }
  //   }
  // }, []);

  return (
    <Container>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>An error happened</h1>
      ) : singleCountry ? (
        <>
          <h1>{singleCountry[0].name.common}</h1>
          <figure>
            <img src={singleCountry[0].flags.png} alt="news" />
          </figure>
          <p>{JSON.stringify(singleCountry[0])}</p>
        </>
      ) : null}
    </Container>
  );
};

export default Article;
