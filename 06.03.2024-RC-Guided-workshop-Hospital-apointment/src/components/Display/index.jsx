import React from "react";

const Display = ({ selectedDoktor, setDisplay }) => {
  return (
    <div>
      <h1>Display Ekrani</h1>
      <button onClick={() => setDisplay(false)}>Tikla</button>
      <h2>{selectedDoktor[0].doktor}</h2>
      <ul>
        {selectedDoktor.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
