import React, { useEffect, useState } from "react";
import SummaryByCategory from "./SummaryByCategory.jsx";
import NumberCard from "./NumberCard.jsx";
import api from "../../api.js";

const AnalyticsContainer = () => {
  const [delta, setDelta] = useState("");
  const [income, setIncome] = useState("");
  const [totalExp, setTotalExp] = useState("");
  const [expByCat, setExpByCat] = useState("");
  const [monthState, setMonth] = useState("");
  const [yearState, setYear] = useState("");

  useEffect(() => {
    api.Analytics.getSummary()
      .then(data => {
        console.log("DATA", data);
        return data;
      })
      .then(data => ({ ...data[Object.keys(data).sort()[0]], month: "March", year: "2020" }))
      .then(({ expByCat, totalExp, income, delta, month, year }) => {
        setDelta(delta / 100);
        setIncome(income / 100);
        setTotalExp(totalExp / 100);
        setExpByCat(expByCat);
        setMonth(month);
        setYear(year);
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
                <NumberCard title={"Net change in assets"} number={(delta > 0 ? "+" : "") + delta.toString()} />
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
          <article className="tile is-child box">
            <SummaryByCategory month={monthState} year={yearState} expByCat={expByCat || []} />
          </article>
        </div>
        <div className="tile is-2"></div>
      </div>
    </div>
  );
};

export default AnalyticsContainer;
