import React from "react";
import { useFetch } from "../hooks/useFetch.js";
import { NavLink, BrowserRouter } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");
  return (
    <BrowserRouter>
      <div className="home">
        <h2>Articles</h2>
        {isPending && <div>Is Loading</div>}
        {error && <div>{error}</div>}
        {articles &&
          articles.map((article) => (
            <div key={article.id} className="card">
              <h3>{article.title}</h3>
              <p>{article.author}</p>
              <NavLink
                onClick={() =>
                  window.location.replace(
                    `http://localhost:3001/articles/${article.id}`
                  )
                }
                to={`/articles/${article.id}`}
              >
                Read More...
              </NavLink>
            </div>
          ))}
      </div>
    </BrowserRouter>
  );
}
