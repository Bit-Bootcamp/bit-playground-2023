import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import "./Articles.css";
import { data } from "../../data";

import ArticleCard from "../../components/cards/ArticleCard";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";

const Articles = ({ isDark }) => {
  const [searchValue, setSearch] = useSearchParams({ searchValue: "ddd" });
  const text = searchValue.get("searchValue");
  const location = useLocation();
  console.log(location);

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
    setFetchData(countries);
  };

  useEffect(() => {
    requestData();
  }, []);

  // useEffect(() => {
  //   setFilteredData(filteredData.map((fd) => ({ ...fd, date: Date.now() })));
  // }, [filteredData]);

  return (
    <Container>
      <Button text="All" handleClick={handleAllData} isDark={isDark} />
      <Button
        text="News"
        handleClick={() => handleFilter("news")}
        isDark={isDark}
      />
      <Button
        text="Blogs"
        handleClick={() => handleFilter("blog")}
        isDark={isDark}
      />
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setSearch({ searchValue: e.target.value })}
      />
      <section className="articles">
        {filteredData &&
          cachedData.map((article) => {
            return <ArticleCard {...article} key={article.id} />;
          })}
      </section>
    </Container>
  );
};

export default Articles;
