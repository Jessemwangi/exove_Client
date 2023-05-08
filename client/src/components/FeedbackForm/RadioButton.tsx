import React, { useState } from 'react';
import "./radio.css";
const RadioButton = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>, index:number) => {
      setSelectedIndex(index);
    };
  
    const radiobg = (slIndex:number) : string => {
        
        switch  (selectedIndex) {
            case 0:
                 return 'zero'
            case 1:
                return 'one'
                case 2:
               return 'two'
            case 3:
                return 'three'
            case 4:
                return 'four'
            default:
                return 'empty'
        }
    }
    const getGradientStyle = () => {
      if (selectedIndex === -1) {
        return { background: "linear-gradient(to right, #d5d7d5d1, #d5d7d5d1, #d5d7d5d1)" };
      } else {
        const percentage = ((selectedIndex + 1) / 5) * 100;
        return {
          background: `linear-gradient(to right, green, yellow ${percentage}%, grey ${percentage}%)`,
        };
      }
    };
    return (
        <div style={{"position":"relative"}}>

<div className="radio-buttons" style={getGradientStyle()}>
      {[1, 2, 3, 4, 5].map((value, index) => (
        <label className={radiobg(index)} key={value}>
              <input
             className={radiobg(index)}
            type="radio"
            name="number"
            value={value}
            checked={selectedIndex === index}
            onChange={(event) => handleOptionChange(event, index)}
          />
          <span>{value}</span>
        </label>
      ))}
    </div>
        </div>
    );
};

export default RadioButton;