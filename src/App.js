import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
function App() {
  const [counter, setCounter] = useState(1);
  const [addedItem, setAddedItem] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = (event) => {
    let decrement = counter;
    if (decrement > 0) {
      event.preventDefault();
      setCounter(counter - 1);
    }
  };

  const handleChange = (e) => {
    setCounter(e.target.value);
  };

  const handleClick = (e) => {
    let count = counter;
    if (count > 0) {
      e.preventDefault();
      setAddedItem(count);
    }
  };
  return (
    <div className="App">
      <Navigation addedItem={addedItem} />
      <Content
        counter={counter}
        handleClick={handleClick}
        handleChange={handleChange}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </div>
  );
}

export default App;
