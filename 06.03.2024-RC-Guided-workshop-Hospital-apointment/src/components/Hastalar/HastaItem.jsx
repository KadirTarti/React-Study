import React from "react";
import { TotalData } from "../../helper/Data";

const HastaItem = ({
  hastaAdi,
  hastaId,
  tarih,
  doktorAdi,
  bittiMi,
  setTodos,
}) => {
  function onHastaItemClick(id) {
    console.log('hastaId', hastaId);
    console.log('bittiMi', bittiMi);
    const dataArray = JSON.parse(localStorage.getItem("todos")) || TotalData;
    const updatedData = dataArray.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          bittiMi: !item.bittiMi,
        };
      }
      return item;
    });
    console.log('updatedData', updatedData)
    setTodos([...TotalData, ...updatedData]);
  }

  return (
    <div
      onClick={() => onHastaItemClick(hastaId)}
      className="HastaItem"
      style={{ backgroundColor: bittiMi ? "lightgray" : "lightblue" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ textDecoration: bittiMi ? "line-through" : "none" }}>
          {hastaAdi}
        </span>
        <span style={{ marginRight: 10, padding: 5 }}>X</span>
      </div>
      <span>{tarih}</span>
      <span style={{ textDecoration: bittiMi ? "line-through" : "none" }}>
        {doktorAdi}
      </span>
    </div>
  );
};

export default HastaItem;
