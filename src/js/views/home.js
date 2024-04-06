import React, { useContext } from "react";
import "../../styles/home.css";
import { Single } from "./single";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  console.log(useContext(Context));

  return (
    <div className="container mt-5">
      <ul class="list-group">
        {store.clients[0].contacts.map((index, contact) => {
          {
            console.log(store.clients[index]);
          }
          <li class="list-group-item">{contact.name}</li>;
        })}
      </ul>
    </div>
  );
};
