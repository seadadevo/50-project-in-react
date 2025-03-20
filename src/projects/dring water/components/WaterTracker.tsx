import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Cup from "./Cup";
import "../drinkWater.css";

const WaterTracker: React.FC = () => {
  const { totalCups, fullCups } = useSelector(
    (state: RootState) => state.water
  );

  const percentage = (fullCups / totalCups) * 100;
  const remainingLiters = 2 - fullCups * 0.25;

  return (
    <div className="container">
      <h3>Drink Water</h3>
      <p>Goal: 2 Liters</p>

      <div className="box">
        <div
          className="flex flex-col items-center justify-center text-center flex-1 transition"
          style={{ visibility: fullCups === totalCups ? "hidden" : "visible" }}
        >
          <span>{remainingLiters.toFixed(2)}L</span>
          <small>Remained</small>
        </div>

        <div
          className="percentage"
          style={{
            height: `${percentage}%`,
            visibility: fullCups === 0 ? "hidden" : "visible",
          }}
        >
          {percentage > 0 && `${percentage.toFixed(0)}%`}
        </div>
      </div>

      <p>Select how many glasses of water that you have drank</p>

      <div className="cups">
        {Array.from({ length: totalCups }).map((_, index) => (
          <Cup key={index} index={index} isActive={index < fullCups} />
        ))}
      </div>
    </div>
  );
};

export default WaterTracker;
