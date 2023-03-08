import React, { useState, useEffect, useMemo } from "react";

import "./Articles.css";
import { data } from "../../data";

import ArticleCard from "../../components/cards/ArticleCard";
import Button from "../../components/button/Button";

const Articles = () => {
  const [filteredData, setFilteredData] = useState();

  const [fetchData, setFetchData] = useState([]);

  const cachedData = useMemo(() => {
    return (
      filteredData && filteredData.map((fd) => ({ ...fd, date: Date.now() }))
    );
  }, [filteredData]);

  const handleFilter = (category) => {
    const dataFiltered = data.filter((article) => {
      return article.category.toLocaleLowerCase() === category;
    });
    setFilteredData(dataFiltered);
  };

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const handleAllData = () => {
    setFilteredData(data);
  };

  const requestData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    console.log(countries);
    setFetchData(countries);
  };

  useEffect(() => {
    requestData();
  }, []);

  // useEffect(() => {
  //   setFilteredData(filteredData.map((fd) => ({ ...fd, date: Date.now() })));
  // }, [filteredData]);

  console.log(cachedData);

  return (
    <>
      <Button text="All" handleClick={handleAllData} />
      <Button text="News" handleClick={() => handleFilter("news")} />
      <Button text="Blogs" handleClick={() => handleFilter("blog")} />
      <section className="articles">
        {filteredData &&
          cachedData.map((article) => {
            return <ArticleCard {...article} key={article.id} />;
          })}
      </section>
    </>
  );
};

export default Articles;
