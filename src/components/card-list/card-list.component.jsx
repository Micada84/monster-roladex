import React from "react";
import "./card-list.style.css";
import { Cart } from '../card/card.component'

export const CardList = (props) => {
    return (<div className="card-list">
    {props.monsters.map((monster) => (
      <Cart key={monster.id}  monsterPropsForCartComponent = { monster } />
    ))}
  </div>)
};
