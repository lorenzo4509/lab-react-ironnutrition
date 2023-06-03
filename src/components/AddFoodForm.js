import React, { useState } from 'react';
import { Input, Button } from 'antd';

const AddFoodForm = ({ onAddFood }) => {
  const [foodData, setFoodData] = useState({
    name: '',
    calories: '',
    image: '',
    servings: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };

  const handleSubmit = () => {
    onAddFood(foodData);
    setFoodData({
      name: '',
      calories: '',
      image: '',
      servings: ''
    });
  };

  return (
    <div className="add-food-form">
      <h2>Add Food</h2>
      <Input
        type="text"
        name="name"
        value={foodData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <Input
        type="number"
        name="calories"
        value={foodData.calories}
        onChange={handleChange}
        placeholder="Calories"
      />
      <Input
        type="text"
        name="image"
        value={foodData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <Input
        type="number"
        name="servings"
        value={foodData.servings}
        onChange={handleChange}
        placeholder="Servings"
      />
      <Button type="primary" onClick={handleSubmit}>
        Add Food
      </Button>
    </div>
  );
};

export default AddFoodForm;