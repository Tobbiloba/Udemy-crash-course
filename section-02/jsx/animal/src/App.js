import { useState } from "react";
import AnimalShow from "./components/AnimalShow";
import './App.css'
function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'gator', 'horse', 'dog']

  return animals[Math.floor(Math.random() * animals.length)]
}
console.log(getRandomAnimal())


function App() {
  const [animal, setAnimal] = useState([])

  const handleClick = () => {
    setAnimal([...animal, getRandomAnimal()])
  }

  const renderAnimals = animal.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
