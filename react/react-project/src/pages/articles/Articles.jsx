import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import "./Articles.css";
import { data } from "../../data";

import ArticleCard from "../../components/cards/ArticleCard";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useGetAllCountriesQuery } from "../../redux/services/countriesApi";

const Articles = () => {
  const [searchValue, setSearch] = useSearchParams({ searchValue: "ddd" });
  const text = searchValue.get("searchValue");
  // const location = useLocation();

  const [filteredData, setFilteredData] = useState();

  // const [fetchData, setFetchData] = useState([]);

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

  const { data, isLoading, error } = useGetAllCountriesQuery();
  console.log(data);

  // const requestData = async () => {
  //   const res = await fetch("https://restcountries.com/v3.1/all");
  //   const countries = await res.json();
  //   setFetchData(countries);
  // };

  // useEffect(() => {
  //   requestData();
  // }, []);

  // useEffect(() => {
  //   setFilteredData(filteredData.map((fd) => ({ ...fd, date: Date.now() })));
  // }, [filteredData]);

  return (
    <Container>
      <Button text="All" handleClick={handleAllData} />
      <Button text="News" handleClick={() => handleFilter("news")} />
      <Button text="Blogs" handleClick={() => handleFilter("blog")} />
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setSearch({ searchValue: e.target.value })}
      />
      <section className="articles">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>An error happened</h1>
        ) : data ? (
          data.map((d) => {
            return <ArticleCard {...d} key={d.ccn3} />;
          })
        ) : null}
        {/* {filteredData &&
          cachedData.map((article) => {
            return <ArticleCard {...article} key={article.id} />;
          })} */}
      </section>
    </Container>
  );
};

export default Articles;
