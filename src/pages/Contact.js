import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);
  // NOTE this is basic javascript that we are using here
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
    </div>
  );
}
