import React from "react";

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li
          key={index}
          style={{
            backgroundColor: ingredient.color,
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  )
};

export default IngredientList
