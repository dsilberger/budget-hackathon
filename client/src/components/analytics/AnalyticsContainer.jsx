import React, { useEffect, useState } from "react";
import SummaryByCategory from "./SummaryByCategory.jsx";
import NumberCard from "./NumberCard.jsx";
import api from "../../api.js";

const AnalyticsContainer = () => {
  const [delta, setDelta] = useState("");
  const [income, setIncome] = useState("");
  const [totalExp, setTotalExp] = useState("");
  const [expByCat, setExpByCat] = useState("");

  useEffect(() => {
    api.Analytics.getSummary().then(({ expByCat, totalExp, income, delta }) => {
      setDelta(delta / 1000);
      setIncome(income / 1000);
      setTotalExp(totalExp / 1000);
      setExpByCat(expByCat);
    });
  }, []);

  return (
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-2"></div>
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article
                className={`tile is-child box ${delta > 0 ? "has-background-success" : "has-background-danger"}`}
              >
                <NumberCard title={"Net change in assets"} number={delta} />
              </article>
              <article className="tile is-child box">
                <NumberCard title={"Income"} number={income} numberClasses="has-text-primary" />
              </article>
              <article className="tile is-child box">
                <NumberCard title={"Expenses"} number={totalExp} numberClasses="has-text-info" />
              </article>
            </div>
          </div>
        </div>
        <div className="tile is-parent is-4">
          <article className="tile is-child box">content 5</article>
        </div>
        <div className="tile is-2"></div>
      </div>
    </div>
  );
};

export default AnalyticsContainer;
