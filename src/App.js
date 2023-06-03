import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import foodsData from './foods.json';
import {Row, Col,} from "antd";

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [filteredFoods, setFilteredFoods] = useState(foodsData);

  const handleDeleteFood = (food) => {
    setFoods(foods.filter((item) => item == food));
    setFilteredFoods(filteredFoods.filter((item) => item == food));
  };

  const handleAddFood = (food) => {
    setFoods([...foods, food]);
    setFilteredFoods([...filteredFoods, food]);
  };

  const handleSearch = (value) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div>
      <AddFoodForm onAddFood={handleAddFood} />
      <Search onSearch={handleSearch} />
      <h1>FOOD LIST</h1>
      <Row gutter={[16, 16]}>
        {filteredFoods.map((food, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <FoodBox
              food={food}
              onDelete={handleDeleteFood}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;