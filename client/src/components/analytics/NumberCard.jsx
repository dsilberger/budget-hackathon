import React from "react";

const NumberCard = ({ title, number, numberClasses }) => {
  return (
    <div className={`container`}>
      <p className="subtitle">{title}</p>
      <p className={`title ${numberClasses}`}>{number}</p>
    </div>
  );
};

export default NumberCard;
