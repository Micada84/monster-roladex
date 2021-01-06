import React from "react";
import "./card.style.css";

export const Cart = (props) => {
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monsterPropsForCartComponent.id}?set=set2 `}alt="monster-picture"/>
      <h2>{props.monsterPropsForCartComponent.name}</h2>
      <p>{props.monsterPropsForCartComponent.email}</p>
    </div>
  );
};
