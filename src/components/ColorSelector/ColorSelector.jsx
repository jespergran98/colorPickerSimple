import { useState } from 'react';
import './ColorSelector.css';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFD700'];

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="color-selector">
      <button 
        style={{ backgroundColor: selectedColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedColor}
      </button>

      {isOpen && (
        <div className="dropdown">
          {colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => {
                setSelectedColor(color);
                setIsOpen(false);
              }}
            >
              {color}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}