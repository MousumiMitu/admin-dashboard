import React, { useState } from "react";
import CardFilter from "./CardFilter";
import BudgeChart from "./BudgeChart";

const BudgetReport = () => {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Budget report <span>| {filter}</span>
        </h5>
        <BudgeChart />
      </div>
    </div>
  );
};

export default BudgetReport;
