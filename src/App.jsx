import { useState } from 'react';
import ColorSelector from './components/ColorSelector/ColorSelector';
import ColorBox from './components/ColorBox/ColorBox';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('#FF5733');

  return (
    <div className="App">
      <h1>Velg en farge!</h1>
      <ColorSelector 
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
      <ColorBox color={selectedColor} />
    </div>
  );
}

export default App;