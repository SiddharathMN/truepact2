import React, { useState } from "react";
import Grid from "./Grid";
import ItemSelector from "./ItemSelector";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [grid, setGrid] = useState(Array(4).fill(Array(4).fill(null)));

  const handleCellClick = (row, col) => {
    if (selectedItem) {
      const newGrid = grid.map((r, i) =>
        i === row ? r.map((cell, j) => (j === col ? selectedItem : cell)) : r
      );
      setGrid(newGrid);
    }
  };

  const optimizeShelf = () => {
    // Example priority-based reshuffling logic (implement your own logic here)
    const flatGrid = grid.flat();
    const prioritizedGrid = flatGrid.sort((a, b) => a?.priority - b?.priority);
    const newGrid = Array(4)
      .fill()
      .map((_, i) => prioritizedGrid.slice(i * 4, i * 4 + 4));
    setGrid(newGrid);
  };

  return (
    <div>
      <ItemSelector setSelectedItem={setSelectedItem} />
      <Grid grid={grid} handleCellClick={handleCellClick} />
      <button onClick={optimizeShelf}>Optimize Shelf</button>
    </div>
  );
};

export default App;
