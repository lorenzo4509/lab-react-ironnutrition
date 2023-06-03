import React from 'react';
import { Button } from 'antd';



const FoodBox = ({ food, onDelete }) => {
  const { name, calories, image, servings } = food;

  const handleDelete = () => {
    onDelete(food);
  };

  return (
    <div className="food-box">
      <div>
        <img src={image} alt={name} width={100} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <Button type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default FoodBox;
