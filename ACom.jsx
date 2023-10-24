import React, { useState } from 'react';
export default function  ACom ({ sugestion }) {
    const [saisi, setSaisi] = useState('');
  
    const handleChange = (e) => {
      setSaisi(e.target.value);
    };
  
    return (
      <div>
        <input type="text" value={saisi} onChange={handleChange} />
        
        <ul>
          {sugestion.filter((sugestion) =>
              suggestion.includes(setSaisi)
            )
            .map((sugestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
        </ul>
      </div>
    );
  };
  
 