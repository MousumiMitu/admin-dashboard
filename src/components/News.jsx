import React, { useState, useEffect } from "react";
import "./news.css";
import CardFilter from "./CardFilter";
import NewsPostItem from "./NewsPostItem";

const News = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:4000/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>| {filter}</span>
        </h5>

        <div className="news">
          {news &&
            news.length > 0 &&
            news.map((item) => <NewsPostItem key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default News;
