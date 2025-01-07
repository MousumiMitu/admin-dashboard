import React from "react";
import "./dashboard.css";

import { data } from "../data/data";
import Reports from "./Reports";
import RecentSales from "./RecentSales";
import TopSelling from "./TopSelling";
import RecentActivity from "./RecentActivity";
import BudgetReport from "./BudgetReport";
import WebTraffic from "./WebTraffic";
import News from "./News";
import Cards from "./Cards";

const Dashboard = () => {
  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row ">
            {/* {data.cards.map((card) => (
              <Card key={card._id} card={card} />
            ))} */}

            <Cards />
            <div className="col-12">
              <Reports />
            </div>
            <div className="col-12">
              <RecentSales />
            </div>
            <div className="col-12">
              <TopSelling />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
