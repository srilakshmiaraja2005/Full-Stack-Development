import React, { useEffect, useReducer } from "react";

// 1. Manage state for NewsData specifically
const newsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START": return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS": return { ...state, loading: false, results: action.payload };
    case "FETCH_ERROR": return { ...state, loading: false, error: action.payload };
    default: return state;
  }
};

export default function NewsDataFeed() {
  const [state, dispatch] = useReducer(newsReducer, {
    results: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const API_KEY = "pub_614c021d82c84b94b022e1ec82fd9094"; 
    const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en`;

    dispatch({ type: "FETCH_START" });

    fetch(url) //fetch returns a promise 
      .then((res) => res.json()) //async function (returns a promise)
      .then((data) => {
        if (data.status === "success") {
          dispatch({ type: "FETCH_SUCCESS", payload: data.results });
        } else {
          throw new Error(data.results.message || "API Error");
        }
      })
      .catch((err) => dispatch({ type: "FETCH_ERROR", payload: err.message }));
  }, []);

  if (state.loading) return <h2>Scanning the globe for news...</h2>;
  if (state.error) return <p style={{ color: "red" }}>Error: {state.error}</p>;

  return (
    <div>
      <h1>new feed</h1>
      {
        state.results.map(
          (t)=>
            <li key={t.title}>{t.title}</li>
        )
      }
    </div>
  );
}
