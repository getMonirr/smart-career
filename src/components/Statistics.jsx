import React from "react";
import DetailsCommonCompo from "./DetailsCommonCompo";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  {
    name: "Assignment 1 🔥",
    total: 60,
    get: 60,
    highest: 60,
  },
  {
    name: "Assignment 2 🔥",
    total: 60,
    get: 60,
    highest: 60,
  },
  {
    name: "Assignment 3 🔥",
    total: 60,
    get: 60,
    highest: 60,
  },
  {
    name: "Assignment 4 🔥",
    total: 60,
    get: 60,
    highest: 60,
  },
  {
    name: "Assignment 5 🥲",
    total: 60,
    get: 50,
    highest: 60,
  },
  {
    name: "Assignment 6 🔥",
    total: 60,
    get: 60,
    highest: 60,
  },
  {
    name: "Assignment 7 🔥",
    total: 60,
    get: 60,
    highest: 60,
  },
  {
    name: "Assignment 8 🔥",
    total: 60,
    get: 60,
    highest: 60,
  },
];

const total = data.reduce((acc,cur) => acc + cur.total,0);
const get = data.reduce((acc,cur) => acc + cur.get,0);
const highest = data.reduce((acc,cur) => acc + cur.highest,0);

const Statistics = () => {
  return (
    <>
      <DetailsCommonCompo>Assignment Statistics</DetailsCommonCompo>
      <div className="sm-container">
        <div className="flex justify-evenly items-center">
          <div>
            <RadarChart
              cx={250}
              cy={250}
              outerRadius={150}
              width={500}
              height={500}
              data={data}
            >
              <Tooltip />
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar
                name="Get"
                dataKey="get"
                stroke="#9873FF"
                fill="#7E90FE"
                fillOpacity={0.7}
              />
            </RadarChart>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="inline-flex gap-2 text-lg font-extrabold text-d2">
              Total Mark: <span className="font-medium text-d3">{total}</span>
            </p>
            <p className="inline-flex gap-2 text-lg font-extrabold text-d2">
              Get Mark: <span className="font-medium text-d3">{get}</span>
            </p>
            <p className="inline-flex gap-2 text-lg font-extrabold text-d2">
              Missing Mark: <span className="font-medium text-d3">{total - get}</span>
            </p>
            <p className="inline-flex gap-2 text-lg font-extrabold text-d2">
              Highest Mark: <span className="font-medium text-d3">{highest}</span>
            </p>
          </div>
        </div>
        <h4 className="text-3xl font-extrabold text-d1 text-center">
          🔥This is statistics of from Assignment 1 to 8 🔥{" "}
        </h4>
      </div>
    </>
  );
};

export default Statistics;
