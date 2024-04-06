import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { state } = useContext(Context);

  console.log(state);

  return (
    <div className="container mt-5">
      <ul class="list-group">
        <li class="list-group-item">An item</li>
      </ul>
    </div>
  );
};
